import * as views from './views';


const login = () => ({
  root: {
    stack: {
      children: [{
        component: views.login()
      }]
    }
  },
})

const init = () => ({
  root: {
    stack: {
      children: [{
        component: views.init()
      }]
    }
  },
})

const home = () => ({
  stack: {
    id: 'tab.HomeScreen',
    children: [
      views.Home(),
    ],
  },
})

const fibonaci = () => ({
  stack: {
    id: 'tab.fibonaci',
    children: [
      views.fibonaci(),
    ],
  },
})

const main = () => ({
  root: {
        bottomTabs: {
          animate: false,
          visible: false,
          drawBehind: false,
          waitForRender: false,
          id: 'tabs.Bottom',
          children: [
            home(),
            fibonaci(),
          ],
          options: {
            bottomTabs: {
              animate: false,
              titleDisplayMode: 'alwaysShow',
              backgroundColor: '#fff',
              elevation: 8, // BottomTabs elevation in dp
            }
          }
        },
  },
})



export {
  views,
  login,
  main,
  init
}