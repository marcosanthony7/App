import { View, Text } from "react-native";

const Gato = ({nome, idade}) => {
    return(
        <View>
            <Text>Meu nome é {nome} e tenho {idade} anos.</Text>
        </View>
    );
}

export default Gato;
