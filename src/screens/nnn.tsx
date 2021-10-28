export default async function CreateMerchantTokenApi(
  {token, ...data}: RequestData,
  config: RequestConfig = {},
): Promise<Result | null> {
  try {
    // get list of countries and their currencies
    const result = await RemoteConfig<ICOUNTRY_CURRENCIES>({
      key: 'COUNTRY_CURRENCIES',
    });
    // get currencies returned
    const currencies = result && result.data;
    // fail if currencies where not returned
    if (!currencies) {
      return Promise.resolve({
        success: false,
        message: result.message,
      });
    }
    // make API call
    const reponse = await Api.post<{
      message: string;
      data: Authenticated;
    }>('/merchant/tokens/create', data, {
      params: {auth: 'mobile'},
      cancelToken: config.cancelToken || undefined,
      headers: {
        ['flw-auth-token']: token,
        ['alt_mode_auth']: 1,
      },
    });
    // resolve with login response data
    return Promise.resolve({
      success: true,
      message: reponse.data.message,
      data: {
        ...reponse.data.data,
        company: {
          ...reponse.data.data.company,
          currency: currencies[reponse.data.data.company.country] || 'USD',
        },
      },
    });
  } catch (e) {
    // resolve to null if action was cancelled
    if (Axios.isCancel(e)) {
      return Promise.resolve(null);
    }
    // logge error to console
    Logger(e);
    // resolve with error message
    return Promise.resolve({
      success: false,
      message:
        (e.response && e.response.data && e.response.data.message) || e.message,
    });
  }
}

selectAccount = (accountId: number) => {
  const {isPending} = this.state;
  const {
    route: {
      params: {authenticated},
    },
  } = this.props;
  // stop if already making request
  if (isPending) {
    return;
  }
  // toggle pending state
  this.setState({isPending: true, accountId}, async () => {
    // make api call
    const response = await CreateMerchantTokenApi(
      {account: accountId, token: authenticated['flw-auth-token'], toggle: 1},
      {cancelToken: new Axios.CancelToken(c => (this.cancelHttp = c))},
    );
    // stop if action was cancelled
    if (!response) {
      return;
    }
    // handle response error
    if (response.data) {
      const {saveAuth} = this.props;
      const authenticatedUpdated = {...authenticated, ...response.data};
      if (
        !authenticatedUpdated.company.reg_meta.find(
          i => i.name === 'business_type',
        ) &&
        /Owner/i.test(authenticatedUpdated.role)
      ) {
        const {navigation} = this.props;
        return navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: 'CompleteSignUp',
                params: {
                  authenticated: authenticatedUpdated,
                },
              },
            ],
          }),
        );
      }
      // save authenticated user information
      return saveAuth(authenticatedUpdated);
    }

    // handle OTP required error
    if (/otp is required/i.test(response.message)) {
      const {navigation} = this.props;
      navigation.dispatch(
        CommonActions.navigate('TwoFactorAuth', {
          mode: 'login',
          authenticated: authenticated,
          accountId,
        }),
      );
      // reset pending mode
      return this.setState({isPending: false, accountId: null});
    }

    // display error message
    Alert.alert('Error', response.message);
    // update component state
    this.setState({
      isPending: false,
      accountId: null,
    });
  });
};
