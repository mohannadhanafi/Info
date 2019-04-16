import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, notification, Icon } from 'antd';
import { Link } from 'react-router-dom';

import CustomScrollbars from 'util/CustomScrollbars';
import Auxiliary from 'util/Auxiliary';

import SidebarLogo from './SidebarLogo.jsx';

import AppsNavigation from './AppsNavigation.jsx';
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE,
} from '../../constants/ThemeSetting';
import IntlMessages from '../../util/IntlMessages';

const { SubMenu } = Menu;

class SidebarContent extends Component {
  getNoHeaderClass = (navStyle) => {
    if (
      navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR
      || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR
    ) {
      return 'gx-no-header-notifications';
    }
    return '';
  };

  getNavStyleSubMenuClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return 'gx-no-header-submenu-popup';
    }
    return '';
  };

  render() {
    const {
      themeType, navStyle, pathname, role, authUser, type,
    } = this.props;

    const selectedKeys = pathname.substr(1);
    const defaultOpenKeys = selectedKeys.split('/')[1];
    return (
      <Auxiliary>
        <SidebarLogo />
        <div className="gx-sidebar-content">
          <CustomScrollbars className="gx-layout-sider-scrollbar">
            <Menu
              defaultOpenKeys={[defaultOpenKeys]}
              selectedKeys={[selectedKeys]}
              theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
              mode="inline"
            >
              <Menu.Item key="main">
                <Link to="/admin/main">
                  <i className="icon icon-home" />
                  <IntlMessages id="sidebar.main" />
                </Link>
              </Menu.Item>
              {role === 'admin' ? (
                <SubMenu
                  key="users"
                  className={this.getNavStyleSubMenuClass(navStyle)}
                  title={(
                    <span>
                      {' '}
                      <i className="icon icon-user" />
                      <IntlMessages id="sidebar.users" />
                    </span>
)}
                >
                  <Menu.Item key="users/view">
                    <Link to="/admin/users/view">
                      <i className="icon icon-plain-list-divider" />
                      <IntlMessages id="sidebar.viewusers" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="users/adduser">
                    <Link to="/admin/users/adduser">
                      <i className="icon icon-add" />
                      <IntlMessages id="sidebar.adduser" />
                    </Link>
                  </Menu.Item>
                </SubMenu>
              ) : null}
              <SubMenu
                key="hero"
                className={this.getNavStyleSubMenuClass(navStyle)}
                title={(
                  <span>
                    {' '}
                    <i className="icon icon-slider" />
                    <IntlMessages id="sidebar.hero" />
                  </span>
)}
              >
                <Menu.Item key="hero/view">
                  <Link to="/admin/hero/view">
                    <i className="icon icon-plain-list-divider" />
                    <IntlMessages id="sidebar.view" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="hero/add">
                  <Link to="/admin/hero/add">
                    <i className="icon icon-add" />
                    <IntlMessages id="sidebar.add" />
                  </Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="core"
                className={this.getNavStyleSubMenuClass(navStyle)}
                title={(
                  <span>
                    {' '}
                    <i className="icon icon-widgets" />
                    <IntlMessages id="sidebar.services" />
                  </span>
)}
              >
                <Menu.Item key="core/viewcore">
                  <Link to="/admin/core/viewcore">
                    <i className="icon icon-plain-list-divider" />
                    <IntlMessages id="sidebar.viewServices" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="core/addcore">
                  <Link to="/admin/core/addcore">
                    <i className="icon icon-add" />
                    <IntlMessages id="sidebar.addService" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="core/settings">
                  <Link to="/admin/core/settings">
                    <i className="icon icon-setting" />
                    <IntlMessages id="sidebar.settings" />
                  </Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="testimonials"
                className={this.getNavStyleSubMenuClass(navStyle)}
                title={(
                  <span>
                    {' '}
                    <i className="icon icon-plain-list-divider" />
                    <IntlMessages id="sidebar.testimonials" />
                  </span>
)}
              >
                <Menu.Item key="testimonials/view">
                  <Link to="/admin/testimonials/view">
                    <i className="icon icon-plain-list-divider" />
                    <IntlMessages id="sidebar.testimonials.view" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="testimonials/add">
                  <Link to="/admin/testimonials/add">
                    <i className="icon icon-add" />
                    <IntlMessages id="sidebar.testimonials.add" />
                  </Link>
                </Menu.Item>
                {/* <Menu.Item key="testimonials/settings">
                  <Link to="/admin/testimonials/settings">
                    <i className="icon icon-setting" />
                    <IntlMessages id="sidebar.settings" />
                  </Link>
                </Menu.Item> */}
              </SubMenu>
              <SubMenu
                key="statistics"
                className={this.getNavStyleSubMenuClass(navStyle)}
                title={(
                  <span>
                    {' '}
                    <i className="icon icon-chart-line" />
                    <IntlMessages id="sidebar.statistics" />
                  </span>
)}
              >
                <Menu.Item key="statistics/view">
                  <Link to="/admin/statistics/view">
                    <i className="icon icon-plain-list-divider" />
                    <IntlMessages id="sidebar.statistics.view" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="statistics/add">
                  <Link to="/admin/statistics/add">
                    <i className="icon icon-add" />
                    <IntlMessages id="sidebar.statistics.add" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="statistics/settings">
                  <Link to="/admin/statistics/settings">
                    <i className="icon icon-setting" />
                    <IntlMessages id="sidebar.settings" />
                  </Link>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="promo">
                <Link to="/admin/promo">
                  <i className="icon icon-setting" />
                  <IntlMessages id="sidebar.promo" />
                </Link>
              </Menu.Item>
              <SubMenu
                key="blogs"
                className={this.getNavStyleSubMenuClass(navStyle)}
                title={(
                  <span>
                    {' '}
                    <i className="icon icon-widgets" />
                    <IntlMessages id="sidebar.blogs" />
                  </span>
)}
              >
                <Menu.Item key="blogs/viewblogs">
                  <Link to="/admin/blogs/viewblogs/all">
                    <i className="icon icon-plain-list-divider" />
                    <IntlMessages id="sidebar.blogs.view" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="blogs/pending">
                  <Link to="/admin/blogs/add">
                    <i className="icon icon-add" />
                    <IntlMessages id="sidebar.blogs.add" />
                  </Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="plan"
                className={this.getNavStyleSubMenuClass(navStyle)}
                title={(
                  <span>
                    {' '}
                    <i className="icon icon-extensions" />
                    <IntlMessages id="sidebar.plan" />
                  </span>
)}
              >
                <Menu.Item key="plan/viewplan">
                  <Link to="/admin/plan/viewplan">
                    <i className="icon icon-plain-list-divider" />
                    <IntlMessages id="sidebar.viewplan" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="plan/addPlan">
                  <Link to="/admin/plan/addPlan">
                    <i className="icon icon-add" />
                    <IntlMessages id="sidebar.addPlan" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="plan/settings">
                  <Link to="/admin/plan/settings">
                    <i className="icon icon-setting" />
                    <IntlMessages id="sidebar.settings" />
                  </Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="options"
                className={this.getNavStyleSubMenuClass(navStyle)}
                title={(
                  <span>
                    {' '}
                    <i className="icon icon-setting" />
                    <IntlMessages id="sidebar.options" />
                  </span>
)}
              >
                <Menu.Item key="options/main">
                  <Link to="/admin/options/main">
                    <i className="icon icon-button" />
                    <IntlMessages id="sidebar.main" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="options/social">
                  <Link to="/admin/options/social">
                    <i className="icon icon-button" />
                    <IntlMessages id="sidebar.social" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="options/footer">
                  <Link to="/admin/options/footer">
                    <i className="icon icon-button" />
                    <IntlMessages id="sidebar.footer" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="options/hours">
                  <Link to="/admin/options/hours">
                    <i className="icon icon-button" />
                    <IntlMessages id="sidebar.hours" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="options/contact">
                  <Link to="/admin/options/contact">
                    <i className="icon icon-button" />
                    <IntlMessages id="sidebar.Contact" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="options/icon">
                  <Link to="/admin/options/icon">
                    <i className="icon icon-button" />
                    <IntlMessages id="sidebar.icon" />
                  </Link>
                </Menu.Item>
                {/* <Menu.Item key="options/map">
                  <Link to="/admin/options/map">
                    <i className="icon icon-button" />
                    <IntlMessages id="sidebar.map" />
                  </Link>
                </Menu.Item> */}
              </SubMenu>
              <SubMenu
                key="teams"
                className={this.getNavStyleSubMenuClass(navStyle)}
                title={(
                  <span>
                    {' '}
                    <i className="icon icon-team" />
                    <IntlMessages id="sidebar.teams" />
                  </span>
)}
              >
                <Menu.Item key="teams/view">
                  <Link to="/admin/teams/view">
                    <i className="icon icon-plain-list-divider" />
                    <IntlMessages id="sidebar.teams.view" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="teams/add">
                  <Link to="/admin/teams/add">
                    <i className="icon icon-add" />
                    <IntlMessages id="sidebar.teams.add" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="teams/settings">
                  <Link to="/admin/teams/settings">
                    <i className="icon icon-setting" />
                    <IntlMessages id="sidebar.settings" />
                  </Link>
                </Menu.Item>
              </SubMenu>
              {/* <SubMenu
                key="aboutMenu"
                className={this.getNavStyleSubMenuClass(navStyle)}
                title={(
                  <span>
                    {' '}
                    <i className="icon icon-widgets" />
                    <IntlMessages id="sidebar.aboutMenu" />
                  </span>
)}
              > */}
              <Menu.Item key="about">
                <Link to="/admin/about">
                  <i className="icon icon-widgets" />
                  <IntlMessages id="sidebar.aboutMenu" />
                </Link>
              </Menu.Item>
              <Menu.Item key="comments">
                <Link to="/admin/comments/all">
                  <i className="icon icon-chat" />
                  <IntlMessages id="sidebar.comments" />
                </Link>
              </Menu.Item>
              {/* <Menu.Item key="about/items">
                  <Link to="/admin/about/items">
                    <i className="icon icon-plain-list-divider" />
                    <IntlMessages id="sidebar.aboutItem" />
                  </Link>
                </Menu.Item> */}
              {/* </SubMenu> */}
              {/*
              <SubMenu
                key="services"
                className={this.getNavStyleSubMenuClass(navStyle)}
                title={(
                  <span>
                    {' '}
                    <i className="icon icon-extensions" />
                    <IntlMessages id="sidebar.services" />
                  </span>
)}
              >
                <Menu.Item key="services/viewServices">
                  <Link to="/admin/services/viewServices">
                    <i className="icon icon-plain-list-divider" />
                    <IntlMessages id="sidebar.viewServices" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="services/addService">
                  <Link to="/admin/services/addService">
                    <i className="icon icon-add" />
                    <IntlMessages id="sidebar.addService" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="services/settings">
                  <Link to="/admin/services/settings">
                    <i className="icon icon-setting" />
                    <IntlMessages id="sidebar.settings" />
                  </Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="portfolio"
                className={this.getNavStyleSubMenuClass(navStyle)}
                title={(
                  <span>
                    {' '}
                    <i className="icon icon-image" />
                    <IntlMessages id="sidebar.portfolio" />
                  </span>
)}
              >
                <Menu.Item key="services/portfolio">
                  <Link to="/admin/services/portfolio">
                    <i className="icon icon-chat" />
                    <IntlMessages id="sidebar.viewportfolio" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="services/portfolio/add">
                  <Link to="/admin/services/portfolio/add">
                    <i className="icon icon-add" />
                    <IntlMessages id="sidebar.addportfolio" />
                  </Link>
                </Menu.Item>
              </SubMenu>

              <Menu.Item key="whyUs">
                <Link to="/admin/whyUs">
                  <i className="icon icon-widgets" />
                  <IntlMessages id="sidebar.whyUs" />
                </Link>
              </Menu.Item>


               */}
            </Menu>
          </CustomScrollbars>
        </div>
      </Auxiliary>
    );
  }
}

SidebarContent.propTypes = {};
const mapStateToProps = ({ settings, auth }) => {
  const {
    navStyle, themeType, locale, pathname, type,
  } = settings;
  const { role, authUser } = auth;
  return {
    navStyle,
    themeType,
    locale,
    pathname,
    role,
    authUser,
    type,
  };
};
export default connect(mapStateToProps)(SidebarContent);
