import { img } from '../images';
import { color } from '../styles/baseTheme';

export const animationPop = () => ({
  enabled: true,
  topBar: {
    translationX: {
      from: 0,
      to: 1000,
      duration: 300,
      interpolation: 'decelerate',
    }
  },
  content: {
    translationX: {
      from: 0,
      to: 1000,
      duration: 300,
      interpolation: 'accelerate',
    }
  }
});

export const animationPush = () => ({
  enabled: true,
  topBar: {
    waitForRender: true,
    translationX: {
      from: require('react-native').Dimensions.get('window').width,
      to: 0,
      duration: 200,
    }
  },
  content: {
    translationX: {
      from: require('react-native').Dimensions.get('window').width,
      to: 0,
      duration: 300,
    }
  }
});

export const animationSetRoot = () => ({
  enable: true,
  waitForRender: true,
  translationX: {
    from: 0,
    to: 0,
    duration: 400,
    interpolation: 'decelerate',
  },
  alpha: {
    from: 0,
    to: 1,
    duration: 300,
    interpolation: 'accelerate',
  }
})

export const statusbarWhite = () => ({
  visible: true,
  style: 'dark',
  backgroundColor: 'white'
})
export const statusbarDrawBehind = () => ({
  drawBehind: true,
  visible: true,
  style: 'dark',
  backgroundColor: 'transparent'
})

export const potrait = () => ({
  orientation: ['portrait']
})
export const hardwareBackButton = (bol1, bol2) => ({
  dismissModalOnPress: bol1,
  popStackOnPress: bol2,
})


