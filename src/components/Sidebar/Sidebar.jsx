import './sidebar.scss';
import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';

const routes = [
  { title: 'Home', icon: 'fas-solid fa-house', path: '/', id: 0 },
  { title: 'Sales', icon: 'chart-line', path: '/sales', id: 1 },
  { title: 'Costs', icon: 'chart-column', path: '/costs', id: 2 },
  { title: 'Payments', icon: 'wallet', path: '/payments', id: 3 },
  { title: 'Finances', icon: 'chart-pie', path: '/finances', id: 4 },
  { title: 'Messages', icon: 'envelope', path: '/messages', id: 5 },
];

const bottomRoutes = [
  { title: 'Settings', icon: 'sliders', path: '/settings', id: 6 },
  { title: 'Support', icon: 'phone-volume', path: '/support', id: 7 },
];

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: true,
      categoryId: 0,
    };
  }

  toggleSidebar = () => {
    this.setState((state) => ({ isOpened: !state.isOpened }));
  };

  goToRoute = (route) => {
    console.log(`going to "${route.path}"`);
    this.setState(() => ({ categoryId: route.id }));
  };

  render() {
    const { isOpened } = this.state;
    const { categoryId } = this.state;
    const containerClassnames = classnames('sidebar', { opened: isOpened });

    return (
      <div className={isOpened ? containerClassnames : 'sidebar-hidden'}>
        <div className="wrapper">
          <div className="header">
            <img className="header__logo" src={logo} alt="TensorFlow logo" />
            <span>TensorFlow</span>
            <div className={isOpened ? 'arrow-left' : 'arrow-right'} onClick={this.toggleSidebar}>
              <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
            </div>
          </div>

          <div className="tabs">
            {routes.map((route) => (
              <div
                className={categoryId === route.id ? 'tabs__active' : 'tabs__item'}
                key={route.title}
                onClick={() => this.goToRoute(route)}
              >
                <FontAwesomeIcon className="tabs__logo" icon={route.icon} />
                <span>{route.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="footer">
          {bottomRoutes.map((route) => (
            <div
              className={categoryId === route.id ? 'tabs__active' : 'tabs__item'}
              key={route.title}
              onClick={() => this.goToRoute(route)}
            >
              <FontAwesomeIcon className="tabs__logo" icon={route.icon} />
              <span>{route.title}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
