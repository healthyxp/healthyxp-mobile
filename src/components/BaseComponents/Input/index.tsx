import { Text, TextInput, TextInputProps, View } from "react-native";

interface InputProps extends TextInputProps {
  label: string
}

export const Input = ({ label, ...rest }: InputProps) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        {...rest}
      />
    </View>
  );
};