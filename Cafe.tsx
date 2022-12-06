import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

interface ICat {
  name: string;
}

const Cat = (props: ICat) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        My name is {props.name} and I am {isHungry ? 'hungry' : 'full'}
      </Text>
      <Button
        onPress={() => setIsHungry(false)}
        disabled={!isHungry}
        title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
      />
    </View>
  );
};

const Cafe = () => {
  return (
    <>
      <Cat name="Munkustrap" />
      <Cat name="Spot" />
    </>
  );
};

export default Cafe;
