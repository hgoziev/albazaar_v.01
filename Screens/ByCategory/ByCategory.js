import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Header from '../../Components/Header/Header';
import Show_Dairy from '../../Components/Show_Dairy/Show_Dairy';
import Show_Best from '../../Components/Show_Best/Show_Best';
import Show_Meat from '../../Components/Show_Meat/Show_Meat';
import Show_Cans from '../../Components/Show_Cans/Show_Cans';
import Show_Drinks from '../../Components/Show_Drinks/Show_Drinks';
import Show_Fruits from '../../Components/Show_Drinks/Show_Drinks';
import Show_Sweet from '../../Components/Show_Sweet/Show_Sweet';
import Show_Spice from '../../Components/Show_Spice/Show_Spice';
import Show_Rice from '../../Components/Show_Rice/Show_Rice';
import Show_Bread from '../../Components/Show_Bread/Show_Bread';
import Show_Frozen from '../../Components/Show_Frozen/Show_Frozen';

function ByCategory({navigation, route}) {
  const {keyword} = route.params;

  const byType = () => {
    switch (keyword) {
      case 'show_dairy':
        return <Show_Dairy navigation={navigation} />;
      case 'show_meat':
        return <Show_Meat navigation={navigation} />;
      case 'show_drinks':
        return <Show_Drinks navigation={navigation} />;
      case 'show_fruits':
        return <Show_Fruits navigation={navigation} />;
      case 'show_bread':
        return <Show_Bread navigation={navigation} />;
      case 'show_cans':
        return <Show_Cans navigation={navigation} />;
      case 'show_sweet':
        return <Show_Sweet navigation={navigation} />;
      case 'show_spice':
        return <Show_Spice navigation={navigation} />;
      case 'show_rice':
        return <Show_Rice navigation={navigation} />;
      case 'show_frozen':
        return <Show_Frozen navigation={navigation} />;
      case 'show_best':
        return <Show_Best navigation={navigation} />;
      default:
        break;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header navigation={navigation} iconChange={true} />
      </View>
      {byType()}
    </View>
  );
}

export default ByCategory;
