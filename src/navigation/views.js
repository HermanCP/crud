import {
  Platform,
} from 'react-native'
import { color, fontSize } from '../styles/baseTheme';
import * as parts from './parts';



const animatedFull = {
  setRoot: parts.animationSetRoot(),
  push: parts.animationPush(),
  pop: parts.animationPop()
}
const animatedPushPop = {
  setRoot: parts.animationSetRoot(),
  push: parts.animationPush(),
  pop: parts.animationPop()
}
const animatedPop = {
  setRoot: parts.animationSetRoot(),
  push: parts.animationPush(),
  pop: parts.animationPop()
}
const animatedPush = {
  push: parts.animationPush()
}
const notanimated = {}

export const init = () => ({
  // component: {
    id: 'init.Component',
    name: 'init.Component',
    options: {
      // modalPresentationStyle: 'overCurrentContext',
      layout: {
        backgroundColor: color.white
      },
      statusBar: {
        visible: true,
        style: "dark",
        backgroundColor: color.white
      },
      topBar: {
        visible: false,
      },
    }
  // }
});

export const login = () => ({
  // component: {
    id: 'Login.Component',
    name: 'Login.Component',
    options: {
      // modalPresentationStyle: 'overCurrentContext',
      layout: {
        backgroundColor: color.white
      },
      statusBar: {
        visible: true,
        style: "dark",
        backgroundColor: color.white
      },
      topBar: {
        visible: true,
        elevation: 5,
        noBorder: true,
        background: {
          color: color.white
        },
        title: {
          component: {
            alignment: "center",
            name: 'Header.Component',
            passProps: {
              title: 'Sign In'
            }
          }
        }
      },
    }
  // }
});

export const Home = () => ({
  component: {
    id: 'List.User.Component',
    name: 'List.User.Component',
    
    options: {
      // hardwareBackButton: parts.hardwareBackButton(false, false),
      // statusBar: parts.statusbarWhite(),
      // layout: parts.potrait(),
      topBar: {
        visible: true,
        elevation: 5,
        noBorder: true,
        background: {
          color: color.white
        },
        title: {
          component: {
            alignment: "center",
            name: 'Header.Component',
            passProps: {
              title:'Daftar User'
            }
          }
        },
      },
      bottomTab: {
        fontSize: fontSize.small,
        selectedFontSize: fontSize.small,
        backgroundColor: color.white,
        text: 'User',
        // icon: img.icon.homeGrey,
        // iconInsets: { top: 5, bottom: 0 },
        // selectedIcon: img.icon.homeBlue,
        // selectedTextColor: color.black,
        // titleDisplayMode: 'alwaysShow'
      }
    }
  },
})
export const fibonaci = () => ({
  component: {
    id: 'Fibonaci.Component',
    name: 'Fibonaci.Component',
    options: {
      hardwareBackButton: parts.hardwareBackButton(false, false),
      statusBar: parts.statusbarWhite(),
      layout: parts.potrait(),
      topBar: {
        visible: true,
        elevation: 5,
        noBorder: true,
        background: {
          color: color.white
        },
        title: {
          component: {
            alignment: "center",
            name: 'Header.Component',
            passProps: {
              title:'Fibonaci'
            }
          }
        },
      },
      bottomTab: {
        fontSize: fontSize.small,
        selectedFontSize: fontSize.small,
        backgroundColor: color.white,
        text: 'Fibonaci',
        // icon: img.icon.homeGrey,
        // iconInsets: { top: 5, bottom: 0 },
        // selectedIcon: img.icon.homeBlue,
        // selectedTextColor: color.black,
        // titleDisplayMode: 'alwaysShow'
      }
    }
  },
})


export const register = () => ({
  component: {
    id: 'Register.Component',
    name: 'Register.Component',
    options: {
      hardwareBackButton: parts.hardwareBackButton(false, true),
      statusBar: parts.statusbarWhite(),
      popGesture: false,
      layout: parts.potrait(),
      topBar: {
        visible: true,
        elevation: 5,
        noBorder: true,
        background: {
          color: color.white
        },
        title: {
          component: {
            name: 'Header.Component',
            passProps: {
              title: 'Daftar'
            }
          }
        },
      },
      bottomTabs: {
        visible: false,
        drawBehind: true,
        animate: true
      },
      animations: Platform.OS === "android" ? animatedPush : notanimated
    }
  }
});

export const addUser = (title, data) => ({
  component: {
    id: 'Add.User.Component',
    name: 'Add.User.Component',
    passProps: {
      data: data
    },
    options: {
      hardwareBackButton: parts.hardwareBackButton(false, true),
      statusBar: parts.statusbarWhite(),
      popGesture: false,
      layout: parts.potrait(),
      topBar: {
        visible: true,
        elevation: 5,
        noBorder: true,
        background: {
          color: color.white
        },
        title: {
          component: {
            name: 'Header.Component',
            passProps: {
              title: title
            }
          }
        },
      },
      bottomTabs: {
        visible: false,
        drawBehind: true,
        animate: true
      },
      animations: Platform.OS === "android" ? animatedPush : notanimated
    }
  }
});