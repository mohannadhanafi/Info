/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Card, Divider, Table, Popconfirm,
} from 'antd';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';

class Dynamic extends React.Component {
  state = {
    data: [],
    columns: [],
  };

  delete = (id) => {
    axios.delete(`/api/v2/hero/delete/${id}`).then((res) => {
      const {
        data: { message },
        statusText,
      } = res;
      if (res.status === 200) {
        NotificationManager.success(message, 'SUCCESS', 2000);
        setTimeout(() => {
          const { data } = this.state;
          const final = data.filter(element => element.id !== id);
          this.setState({ data: final });
        }, 500);
      } else {
        NotificationManager.error(message || statusText, 'ERROR', 2000);
      }
    });
  };

    componentWillMount = () => {
      axios.get('/api/v2/hero/getAll').then((result) => {
        const { data } = result;
        const columns = [
          {
            title: 'image',
            dataIndex: 'image',
            key: 'image',
            render: (text, record) => (
              <img
                className="thumb--image gx-mr-2"
                src={`/api/v2/getFile/${record.image}`}
                alt=""
              />
            ),
          },
          {
            title: 'title',
            dataIndex: 'title',
            key: 'title',
            sorter: (a, b) => a.title.props.children.length - b.title.props.children.length,
          },
          {
            title: 'description',
            dataIndex: 'description',
            key: 'description',
            sorter: (a, b) => a.description.length - b.description.length,
          },
          {
            title: 'Action',
            key: 'action',
            dataIndex: 'action',
            width: 100,
          },
        ];
        this.setState({ columns });
        data.map((element) => {
          element.action = (
            <span>
              <Link to={`/admin/hero/${element.id}`} className="icon icon-feedback" />
              <Divider type="vertical" />
              <Popconfirm
                title="Are you sure delete this Hero?"
                onConfirm={() => this.delete(element.id)}
                okText="Yes"
                cancelText="No"
              >
                <a className="gx-mb-3 icon icon-trash" href="/" />
              </Popconfirm>
            </span>
          );
          element.title = (
            <Link to={`/admin/hero/${element.id}`}>{element.title}</Link>
          );
          return element;
        });
        this.setState(() => ({ data }));
      });
    };

    render() {
      const { data, columns } = this.state;
      return (
        <Card title="heros List">
          <Table
            className="gx-table-responsive"
            {...this.state}
            columns={columns}
            dataSource={data}
          />
          <NotificationContainer />
        </Card>
      );
    }
}

export default Dynamic;
