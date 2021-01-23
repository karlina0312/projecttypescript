import MockAdapter from "axios-mock-adapter/types";
import {
  LOGIN_URL,
  ME_URL,
  REGISTER_URL,
  REQUEST_PASSWORD_URL
} from "../_redux/authCrud";
import userTableMock from "./userTableMock";

export default function mockAuth(mock: MockAdapter){
  mock.onPost(LOGIN_URL).reply(({ data }) => {
    const { email, password } = JSON.parse(data);

    if (email && password) {
      const user = userTableMock.find(
        x =>
          x.email.toLowerCase() === email.toLowerCase() &&
          x.password === password
      );

      if (user) {
        return [200, { ...user, password: undefined }];
      }
    }

    return [400];
  });

  mock.onPost(REGISTER_URL).reply(({ data }): (number | { password: undefined; id: number; email: any; fullname: any; username: any; roles: number[]; accessToken: string; refreshToken: string; pic: string; })[] => {
      const { email, fullname, username, password } = JSON.parse(data);

      if (email && fullname && username && password) {
        const user = {
          id: generateUserId(),
          email,
          fullname,
          username,
          password,
          roles: [2],
          accessToken: "access-token-" + Math.random(),
          refreshToken: "access-token-" + Math.random(),
          pic: process.env.PUBLIC_URL + "/media/users/default.jpg"
        };
        console.log('user'+ user);
        userTableMock.push();

        return [200, { ...user, password: undefined }];
      }

      return [400];
    }
  );

  mock.onPost(REQUEST_PASSWORD_URL).reply(({ data }) => {
    const { email } = JSON.parse(data);

    if (email) {
      const user = userTableMock.find(
        x => x.email.toLowerCase() === email.toLowerCase()
      );
      console.log('password'+ user?.password);
      if (user) {
        //user.password = undefined;
        // user.password = undefined;

        return [200, { ...user, password: undefined }];
      }
    }

    return [400];
  });

  mock.onGet(ME_URL).reply(({ headers: { Authorization } }) => {
    const accessToken =
      Authorization &&
      Authorization.startsWith("Bearer ") &&
      Authorization.slice("Bearer ".length);

    if (accessToken) {
      const user = userTableMock.find(x => x.accessToken === accessToken);

      if (user) {
        return [200, { ...user, password: undefined }];
      }
    }

    return [401];
  });

  function generateUserId() {
    const ids = userTableMock.map(el => el.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
  }
  
}
