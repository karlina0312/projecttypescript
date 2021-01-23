/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/products/productsActions";
import { useProductsUIContext } from "../ProductsUIContext";
import { productsSlice } from '../../../_redux/products/productsSlice';
// import { any } from 'prop-types';

// interface productsUIContext{
//   setIds: any,
//   queryParams:any
// }

export function ProductDeleteDialog({ id, show, onHide }:{id:any; show:any; onHide:any;}):JSX.Element{
  // Products UI Context
  const productsUIContext = useProductsUIContext();
  const productsUIProps = useMemo(() => {
    return {
      queryParams: productsUIContext,
    };
  }, [productsUIContext]);

  // Products Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state}),
    shallowEqual
  );

  // if !id we should close modal
  useEffect(() => {
    if (!id) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // looking for loading/dispatch
  useEffect(() => {}, [isLoading, dispatch]);

  function deleteProduct(): void {
    // server request for deleting product by id
    // dispatch(actions.deleteProduct(id)).then(
    //   () => {

    //     // refresh list after
    //     dispatch(actions.fetchProducts(productsUIProps.queryParams));
    //     // clear selections list
    //     productsUIProps;
    //     // closing delete modal
    //     onHide();
    //   }
    // );
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Барааны устгал
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Та шууд устгах уу?</span>
        )}
        {isLoading && <span>Бараа устгаж байна...</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={onHide}
            className="btn btn-light btn-elevate"
          >
            Цуцлах
          </button>
          <> </>
          <button
            type="button"
            onClick={deleteProduct}
            className="btn btn-delete btn-elevate"
          >
            Устгах
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
