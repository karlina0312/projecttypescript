// eslint-disable-next-line
import specificationTableMock from "./specificationTableMock";
import MockUtils from "./mock.utils";
import MockAdapter from "axios-mock-adapter/types";
import { Specifications } from '../pages/products/product-specifications/Specifications';

export default function mockSpecifications(mock: MockAdapter) {
  mock.onPost("api/specifications").reply(({ data }) => {
    const { specification } = JSON.parse(data);
    const { carId, value = "", specId } = specification;
    const id = generateSpecificationId();
    const newSpecification = {
      id,
      carId: +carId,
      value,
      specId: +specId
    };
    specificationTableMock.push();
    return [200, { specification: newSpecification }];
  });

  mock.onPost(/api\/specificationsfind\/\d+/).reply(config => {
    // const urls = config.url.split("/");
    const urls = config.url;
    const id = urls;
    const mockUtils = new MockUtils();
    const { queryParams } = JSON.parse(config.data);
    const specifications = specificationTableMock.filter(
      // el => el.carId === +id
      el =>el.carId
    );
    const result:any = [];
    specifications.forEach(el => result.push(wrapSpecification(el)));
    const filterdSpecifications = mockUtils.baseFilter(result, queryParams);

    return [200, filterdSpecifications];
  });

  mock.onPost("api/specifications/deleteSpecifications").reply(config => {
    const { ids } = JSON.parse(config.data);
    ids.forEach((id: number) => {
      const index = specificationTableMock.findIndex(el => el.id === id);
      if (index > -1) {
        specificationTableMock.splice(index, 1);
      }
    });
    return [200];
  });

  mock.onGet(/api\/specifications\/\d+/).reply(config => {
    // const id = config.url.match(/api\/specifications\/(\d+)/)[1];
    const id = config.url;
    // const spec = specificationTableMock.find(el => el.id === +id);
    const spec = specificationTableMock.find(el => el.id);
    if (!spec) {
      return [400];
    }

    const specification = wrapSpecification(spec);

    return [200, specification];
  });

  mock.onPut(/api\/specifications\/\d+/).reply(config => {
    // const id = config.url.match(/api\/specifications\/(\d+)/)[1];
    const id = config.url;
    const { specification } = JSON.parse(config.data);
    // const index = specificationTableMock.findIndex(el => el.id === +id);
    const index = specificationTableMock.findIndex(el => el.id);
    if (!index) {
      return [400];
    }

    specificationTableMock[index] = { ...specification };
    return [200];
  });

  mock.onDelete(/api\/specifications\/\d+/).reply(config => {
    // const id = config.url.match(/api\/specifications\/(\d+)/)[1];
    const id = config.url;
    // const index = specificationTableMock.findIndex(el => el.id === +id);
    const index = specificationTableMock.findIndex(el => el.id);
    specificationTableMock.splice(index, 1);
    // if (!index === -1) {
    //   return [400];
    // }

    return [200];
  });
}

function generateSpecificationId() {
  const ids = specificationTableMock.map(el => el.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
}

function wrapSpecification(specification: { id: number; carId: number; specId: number; value: string; _userId: number; _createdDate: string; _updatedDate: string; }) {
  const newSpec = { ...specification };
  // newSpec.name = getSpecNameById(newSpec.specId);
  getSpecNameById(newSpec.specId);
  return newSpec;
}

function getSpecNameById(specId: number) {
  const specs = [
    "Seats",
    "Fuel Type",
    "Stock",
    "Door count",
    "Engine",
    "Transmission",
    "Drivetrain",
    "Combined MPG",
    "Warranty",
    "Wheels"
  ];
  return specs[specId];
}
