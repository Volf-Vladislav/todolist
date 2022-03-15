import { StyleSheet, Dimensions } from 'react-native'
import { COLORS } from './../../../templates/style/colors'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 16,
        paddingTop: 0,
        height: Dimensions.get('window').height - 200
    },
    title: {
        fontSize: 18,
          
        color: COLORS().title,
        fontWeight: '700',
        marginBottom: 16
    },
    checkbox: {
        borderColor: COLORS().checkbox,
        width: 20,
        height: 20,
        borderRadius: 5,
        borderWidth: 1
    },
    listElement: {
        flexDirection: 'row',
        marginBottom: 16,
        alignItems: 'center'
    },
    listText: {
        fontSize: 18,
          
        color: COLORS().defaultText,
        marginLeft: 16,
        fontWeight: '500',
    },
    listTextDisabled: {
        fontSize: 18,
          
        color: COLORS().disabledText,
        marginLeft: 16,
        fontWeight: '500',
    },
    titleDisabled: {
        fontSize: 18,
          
        color: COLORS().title,
        fontWeight: '700',
        marginBottom: 16,
        marginTop: 20
    },
    listTextDate: {
        fontSize: 14,
          
        color: COLORS().defaultText,
        marginLeft: 16,
        marginTop: 4,
        fontWeight: '400',
    }
})