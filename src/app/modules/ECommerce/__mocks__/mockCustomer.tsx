// eslint-disable-next-line
import customerTableMock from './customerTableMock';
import MockUtils from "./mock.utils";
import { any } from 'prop-types';

export default function mockCustomer(mock: { onPost: (arg0: string) => { (): any; new(): any; reply: { (arg0: { ({ data }: { data: any; }): (number | { customer: { id: number; firstName: any; lastName: any; email: any; userName: any; gender: any; status: any; dateOfBbirth: any; ipAddress: any; type: any; }; })[]; (config: any): (number | { entities: any[]; totalCount: number; errorMessage: string; })[]; (config: any): number[]; (config: any): number[]; }): void; new(): any; }; }; onGet: (arg0: RegExp) => { (): any; new(): any; reply: { (arg0: (config: any) => (number | { id: number; firstName: string; lastName: string; email: string; userName: string; gender: string; status: number; dateOfBbirth: string; ipAddress: string; type: number; _userId: number; _createdDate: string; _updatedDate: string; })[]): void; new(): any; }; }; onPut: (arg0: RegExp) => { (): any; new(): any; reply: { (arg0: (config: any) => number[]): void; new(): any; }; }; onDelete: (arg0: RegExp) => { (): any; new(): any; reply: { (arg0: (config: any) => number[]): void; new(): any; }; }; }) {
  // mock.onPost("api/customers").reply(({ data }): (number | { customer: { id: number; firstName: any; lastName: any; email: any; userName: any; gender: any; status: any; dateOfBbirth: any; ipAddress: any; type: any; }; })[] => {
  //     const { customer } = JSON.parse(data);
  //     const {
  //       firstName = "",
  //       lastName = "",
  //       email = "",
  //       userName = "",
  //       gender = "Female",
  //       status = 0,
  //       dateOfBbirth = "01/01/2019",
  //       ipAddress = "127.0.0.1",
  //       type = 1
  //     } = customer;

  //     const id = generateUserId();
  //     const newCustomer = {
  //       id,
  //       firstName,
  //       lastName,
  //       email,
  //       userName,
  //       gender,
  //       status,
  //       dateOfBbirth,
  //       ipAddress,
  //       type
  //     };
  //     customerTableMock.push();
  //     return [200, { customer: newCustomer }];
  //   });

  // mock.onPost("api/customers/find").reply(function (config: { data: string; }): (number | { entities: any[]; totalCount: number; errorMessage: string; })[] {
  //     const mockUtils = new MockUtils();
  //     const { queryParams } = JSON.parse(config.data);
  //     const filterdCustomers = mockUtils.baseFilter(
  //       customerTableMock,
  //       queryParams
  //     );
  //     return [200, filterdCustomers];
  //   });

  mock.onPost("api/customers/deleteCustomers").reply((config: { data: string; }) => {
    const { ids } = JSON.parse(config.data);
    ids.forEach((id: number) => {
      const index = customerTableMock.findIndex(el => el.id === id);
      if (index > -1) {
        customerTableMock.splice(index, 1);
      }
    });
    return [200];
  });

  mock.onPost("api/customers/updateStatusForCustomers").reply((config: { data: string; }) => {
    const { ids, status } = JSON.parse(config.data);
    customerTableMock.forEach(el => {
      if (ids.findIndex((id: number) => id === el.id) > -1) {
        el.status = status;
      }
    });
    return [200];
  });

  mock.onGet(/api\/customers\/\d+/).reply(config => {
    const id = config.url.match(/api\/customers\/(\d+)/)[1];
    const customer = customerTableMock.find(el => el.id === +id);
    if (!customer) {
      return [400];
    }

    return [200, customer];
  });

  mock.onPut(/api\/customers\/\d+/).reply(config => {
    const id = config.url.match(/api\/customers\/(\d+)/)[1];
    const { customer } = JSON.parse(config.data);
    const index = customerTableMock.findIndex(el => el.id === +id);
    if (!index) {
      return [400];
    }

    customerTableMock[index] = { ...customer };
    return [200];
  });

  mock.onDelete(/api\/customers\/\d+/).reply(config => {
    const id = config.url.match(/api\/customers\/(\d+)/)[1];
    const index = customerTableMock.findIndex(el => el.id === +id);
    customerTableMock.splice(index, 1);
    // if (!index === -1) {
    //   return [400];
    // }

    return [200];
  });
}

function generateUserId() {
  const ids = customerTableMock.map(el => el.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
}
