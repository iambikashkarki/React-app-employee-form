import React from "react";
import {Table} from "antd";

const TableForm =() =>{
    const columns = [
        {
          title: 'First Name',
          dataIndex: 'First Name',
          key: 'First Name',
        },
        {
          title: 'Last Name',
          dataIndex: 'Last Name',
          key: 'Last Name',
        },
        {
          title: 'Email',
          dataIndex: 'Email',
          key: 'Email',
        },
        {
            title: 'Gender',
            dataIndex: 'Gender',
            key: 'Gender',
          },
          {
            title: 'Date of Birth',
            dataIndex: 'Date of Birth',
            key: 'Date of Birth',
          },
          {
            title: 'Contact Number',
            dataIndex: 'Contact Number',
            key: 'Contact Number',
          },
          {
            title: 'Address',
            dataIndex: 'Address',
            key: 'Address',
          },
      ];
      return(<Table dataSource={JSON.parse(localStorage.getItem("employeeRecord"))} columns={columns} />);
}
export default TableForm;