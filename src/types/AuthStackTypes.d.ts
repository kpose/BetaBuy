import { StackScreenProps } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';


export type AuthStackParams = {
    Signin: undefined;
    Signup: undefined;
    HomePage: undefined
}


/* Param lists */
type AuthStackRouteParams = StackScreenProps<AuthStackParams, 'Signin'>;







/* Navigation params */
type AuthStackNavParams = StackNavigationProp<
  AuthStackParams,
  'Signin'
>;




/* Props */
export type AuthStackProps = {
  navigation: AuthStackNavParams;
  route: AuthStackRouteParams;
};