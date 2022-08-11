import {
    TypedNavigator,
    ParamListBase,
    StackNavigationState,
    NativeStackNavigationOptions,
    NativeStackNavigatorProps,
    NativeStackNavigationEventMap,
    ScreenOptions,
} from '@react-navigation/drawer';

export interface PropsGroup {
    Drawer: TypedNavigator<
        ParamListBase,
        StackNavigationState<ParamListBase>,
        NativeStackNavigationOptions,
        NativeStackNavigationEventMap,
        ({
            initialRouteName,
            children,
            screenListeners,
            screenOptions,
            ...rest
        }: NativeStackNavigatorProps) => JSX.Element
    >;
}

export interface PropsGroupAuth extends PropsGroup {
    screenOptionsBase: ScreenOptions;
}

export type AppStackParamList = {
    Login: undefined;
    Cadastro: undefined;
    EscolhaConta: undefined;
    InformaçãoUsuário: undefined;
    InformaçãoProfissional: undefined;
    EscolhaProfissão: undefined;
    // FeedUser: undefined;
    // FeedProfission: undefined; 
    // PerfilProfisional: undefined

};

export type RootStackParamList = AppStackParamList;
