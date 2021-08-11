import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Pressable} from 'react-native';
import {scale} from 'react-native-size-matters';
import Container from '../../components/Container';
import Label from '../../components/Label';
import CustomButton from '../../components/CustomButton';
import {appColors} from '../../utils/appColors';
import Feather from 'react-native-vector-icons/Feather';
import TitleComp from '../../components/TitleComp';
import {productDetail} from '../../utils/MockData';
import ReviewComp from '../../components/ReviewComp';
import BottomButtons from '../../components/BottomButtons';

export default function index({navigation}) {
  const {name, detail, price, size, color, image, isFav} = productDetail;
  const _renderBottom = () => {
    return ( <BottomButtons onPress={()=> navigation.navigate("Cart")}  price={price} buttonLabel="ADD" />
    );
  };
  return (
    <>
      <Container bodyStyle={{paddingHorizontal: scale(0)}} isScrollable>
        <View>
          <ImageBackground
            style={{height: scale(400), width: '100%'}}
            resizeMode="cover"
            source={require('../../static/images/products/2.png')}>
            <View
              style={{
                marginTop: scale(40),
                paddingHorizontal: scale(20),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Pressable onPress={() => navigation.goBack()}>
                <Feather
                  name="chevron-left"
                  size={scale(25)}
                  color={appColors.black}
                />
              </Pressable>

              <Pressable
                style={{
                  borderRadius: scale(25),
                  backgroundColor: appColors.white,
                  height: scale(45),
                  width: scale(45),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Feather name="star" size={scale(20)} color={appColors.black} />
              </Pressable>
            </View>
          </ImageBackground>
        </View>
        <View style={{paddingHorizontal: scale(20), marginBottom:scale(100)}}>
          <View style={{paddingVertical: scale(20)}}>
            <Label
              text={name}
              style={{fontWeight: '700', fontSize: scale(30)}}
            />
          </View>

          <View
            style={{
              paddingVertical: scale(10),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={styles.sizeContainer}>
              <Label text="Size" style={{fontSize: scale(15)}} />
              <Label
                text="XL"
                style={{fontWeight: '700', fontSize: scale(15)}}
              />
            </View>

            <View style={styles.sizeContainer}>
              <Label text="Colour" style={{fontSize: scale(15)}} />
              <View style={styles.itemColor} />
            </View>
          </View>

          <View style={{paddingVertical: scale(20)}}>
            <TitleComp heading={'Details'} />
            <View style={{paddingVertical: scale(20)}}>
              <Label
                text={detail}
                style={{fontSize: scale(14), lineHeight: scale(25)}}
              />
            </View>
          </View>
          <View>
            <TitleComp heading={'Reviews'} />
            <Pressable onPress={()=> navigation.navigate("WriteReview",{name}) }>
                <Label text="Write your review" style={styles.wrtitle} />
            </Pressable>
          
            <ReviewComp />
          </View>
        </View>
      </Container>
      {_renderBottom()}
    </>
  );
}

const styles = StyleSheet.create({
  sizeContainer: {
    flex: 0.47,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: appColors.white,
    padding: scale(10),
    paddingHorizontal: scale(20),
    borderRadius: scale(20),
    borderWidth: scale(0.4),
    borderColor: appColors.gray,
  },
  itemColor: {
    height: scale(20),
    width: scale(20),
    backgroundColor: appColors.primary,
    borderRadius: scale(5),
  },
  wrtitle: {
    paddingVertical: scale(10),
    fontSize: scale(14),
    color: appColors.primary,
  },
});
