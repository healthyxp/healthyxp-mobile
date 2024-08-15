import React, { useEffect, useState } from 'react';
import { Image, Text, View, ViewProps } from 'react-native';
//TODO: Procurar como colocar o import apartir da pasta src
import HXPIcon from '../../assets/images/logo.png';
import { styles } from './styles';

interface LogoProps extends ViewProps {
  divider?: number;
}

export const Logo = ({ divider = 2 }: LogoProps) => {
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const { width, height } = Image.resolveAssetSource(HXPIcon);
    setImageDimensions({ width: width / divider, height: height / divider });
  }, []);

  return (
    <View>
      <Image
        style={[{ width: imageDimensions.width, height: imageDimensions.height }]}
        source={HXPIcon}
      />
      <Text style={styles.text}>HealthyXP</Text>
    </View>
  );
};
