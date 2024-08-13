import React, { useEffect, useState } from "react";
import { Image, Text, View, ViewProps } from "react-native";
import { styles } from "./styles";
const image = require("../../../assets/images/logo.png"); // TODO: não consigo usar import e eslint diz para não usar require

interface LogoProps extends ViewProps {
  divider?: number;
}

export const Logo = ({ divider }: LogoProps) => {
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  divider = divider ? divider : 2;

  useEffect(() => {
    const { width, height } = Image.resolveAssetSource(image);
    setImageDimensions({ width: width / divider, height: height / divider });
  }, []);

  return (
    <View>
      <Image
        style={[{ width: imageDimensions.width, height: imageDimensions.height }]}
        source={image}
      />
      <Text style={styles.text}>HealthyXP</Text>
    </View>
  );
};
