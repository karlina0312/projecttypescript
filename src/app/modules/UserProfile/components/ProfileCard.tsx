/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import {
  DropdownCustomToggler,
  DropdownMenu1,
} from "../../../../_metronic/_partials/dropdowns";

export function ProfileCard() {
  const user = useSelector(({ auth }) => auth.user, shallowEqual);

  useEffect(() => {
    return () => {};
  }, [user]);

  return (
    <>
      {user && (
        <div
          className="flex-row-auto offcanvas-mobile w-250px w-xxl-350px"
          id="kt_profile_aside"
        >
          <div className="card card-custom card-stretch">
            {/* begin::Body */}
            <div className="card-body pt-4">
              {/* begin::Toolbar */}
              <div className="d-flex justify-content-end">
                <Dropdown className="dropdown dropdown-inline" alignRight>
                  <Dropdown.Toggle
                    className="btn btn-clean btn-hover-light-primary btn-sm btn-icon cursor-pointer"
                    variant="transparent"
                    id="dropdown-toggle-top-user-profile"
                    as={DropdownCustomToggler}
                  >
                    <i className="ki ki-bold-more-hor"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                    <DropdownMenu1></DropdownMenu1>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              {/* end::Toolbar */}
              {/* begin::User */}
              <div className="d-flex align-items-center">
                <div className="symbol symbol-60 symbol-xxl-100 mr-5 align-self-start align-self-xxl-center">
                  <div
                    className="symbol-label"
                    style={{ backgroundImage: `url(${user.pic})` }}
                  ></div>
                  {/* style="background-i
                  mage:url('/metronic/theme/html/demo1/dist/assets/media/users/300_21.jpg')" */}
                  <i className="symbol-badge bg-success"></i>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-weight-bolder font-size-h5 text-dark-75 text-hover-primary"
                  >
                    {user.firstname} {user.lastname}
                  </a>
                  <div className="text-muted">{user.occupation}</div>
                </div>
              </div>
              {/* end::User */}
              {/* begin::Contact */}
              <div className="py-9">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="font-weight-bold mr-2">Емайл:</span>
                  <span className="text-muted text-hover-primary">
                    {user.email}
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="font-weight-bold mr-2">Утасны дугаар:</span>
                  <span className="text-muted">{user.phone}</span>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <span className="font-weight-bold mr-2">Байршил:</span>
                  <span className="text-muted">{user.address.city}</span>
                </div>
              </div>
              {/* end::Contact */}
              {/* begin::Nav */}
              <div className="navi navi-bold navi-hover navi-active navi-link-rounded">
                <div className="navi-item mb-2">
                  <NavLink
                    to="/user-profile/profile-overview"
                    className="navi-link py-4"
                    activeClassName="active"
                  >
                    <span className="navi-icon mr-2">
                      <span className="svg-icon">
                        <SVG
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Design/Layers.svg"
                          )}
                        ></SVG>{" "}
                      </span>
                    </span>
                    <span className="navi-text font-size-lg">
                      Профайл
                    </span>
                  </NavLink>
                </div>
                <div className="navi-item mb-2">
                  <NavLink
                    to="/user-profile/personal-information"
                    className="navi-link py-4"
                    activeClassName="active"
                  >
                    <span className="navi-icon mr-2">
                      <span className="svg-icon">
                        <SVG
                          src={toAbsoluteUrl(
                            "/media/svg/icons/General/User.svg"
                          )}
                        ></SVG>{" "}
                      </span>
                    </span>
                    <span className="navi-text font-size-lg">
                      Хувийн мэдээлэл
                    </span>
                  </NavLink>
                </div>
                <div className="navi-item mb-2">
                  <NavLink
                    to="/user-profile/account-information"
                    className="navi-link py-4"
                    activeClassName="active"
                  >
                    <span className="navi-icon mr-2">
                      <span className="svg-icon">
                        <SVG
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Code/Compiling.svg"
                          )}
                        ></SVG>{" "}
                      </span>
                    </span>
                    <span className="navi-text font-size-lg">
                      Aкаунтын мэдээлэл
                    </span>
                  </NavLink>
                </div>
                <div className="navi-item mb-2">
                  <NavLink
                    to="/user-profile/change-password"
                    className="navi-link py-4"
                    activeClassName="active"
                  >
                    <span className="navi-icon mr-2">
                      <span className="svg-icon">
                        <SVG
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Communication/Shield-user.svg"
                          )}
                        ></SVG>{" "}
                      </span>
                    </span>
                    <span className="navi-text font-size-lg">
                      Нууц үг өөрчлөх
                    </span>
                    <span className="navi-label">
                      <span className="label label-light-danger label-rounded font-weight-bold">
                        5
                      </span>
                    </span>
                  </NavLink>
                </div>
                <div className="navi-item mb-2">
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Шинэ...</Tooltip>}
                  >
                    <a href="#" className="navi-link py-4">
                      <span className="navi-icon mr-2">
                        <span className="svg-icon">
                          <SVG
                            src={toAbsoluteUrl(
                              "/media/svg/icons/Layout/Layout-top-panel-6.svg"
                            )}
                          ></SVG>{" "}
                        </span>
                      </span>
                      <span className="navi-text font-size-lg">
                        өөрчлөн хадгалах
                      </span>
                    </a>
                  </OverlayTrigger>
                </div>
                <div className="navi-item mb-2">
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Удаахгүй...</Tooltip>}
                  >
                    <a href="#" className="navi-link py-4">
                      <span className="navi-icon mr-2">
                        <span className="svg-icon">
                          <SVG
                            src={toAbsoluteUrl(
                              "/media/svg/icons/Files/File.svg"
                            )}
                          ></SVG>{" "}
                        </span>
                      </span>
                      <span className="navi-text font-size-lg">
                        Татвар
                      </span>
                      <span className="navi-label">
                        <span className="label label-light-primary label-inline font-weight-bold">
                          new
                        </span>
                      </span>
                    </a>
                  </OverlayTrigger>
                </div>
                <div className="navi-item mb-2">
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Удаахгүй!...</Tooltip>}
                  >
                    <a href="#" className="navi-link py-4">
                      <span className="navi-icon mr-2">
                        <span className="svg-icon">
                          <SVG
                            src={toAbsoluteUrl(
                              "/media/svg/icons/Text/Article.svg"
                            )}
                          ></SVG>{" "}
                        </span>
                      </span>
                      <span className="navi-text">Мэдэгдэл</span>
                    </a>
                  </OverlayTrigger>
                </div>
              </div>
              {/* end::Nav */}
            </div>
            {/* end::Body */}
          </div>
        </div>
      )}
    </>
  );
}
