import { StackScreenProps } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';


export type AppStackParams = {
    HomePage: undefined;
}


/* Param lists */
type AppStackRouteParams = StackScreenProps<AppStackParams, 'HomePage'>;







/* Navigation params */
type AppStackNavParams = StackNavigationProp<
  AppStackParams,
  'HomePage'
>;




/* Props */
export type AppStackProps = {
  navigation: AppStackNavParams;
  route: AppStackRouteParams;
};