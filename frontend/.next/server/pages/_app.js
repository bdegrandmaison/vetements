(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Cart.js":
/*!****************************!*\
  !*** ./components/Cart.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Cart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_CartStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/CartStyles */ "./components/styles/CartStyles.js");
/* harmony import */ var _styles_Supreme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Supreme */ "./components/styles/Supreme.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/calcTotalPrice */ "./lib/calcTotalPrice.js");
/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/cartState */ "./lib/cartState.js");
/* harmony import */ var _styles_CloseButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/CloseButton */ "./components/styles/CloseButton.js");
/* harmony import */ var _RemoveFromCart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./RemoveFromCart */ "./components/RemoveFromCart.js");
/* harmony import */ var _Checkout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Checkout */ "./components/Checkout.js");

var _jsxFileName = "D:\\vetements\\frontend\\components\\Cart.js";











const CartItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_2___default().li.withConfig({
  displayName: "Cart__CartItemStyles",
  componentId: "sc-1vz6nkw-0"
})(["padding:1rem 0;border-bottom:1px solid var(--lightGrey);display:grid;grid-template-columns:auto 1fr auto;img{margin-right:1rem;width:100px;}h3,p{margin:0;}"]);

function CartItem({
  cartItem
}) {
  var _product$photo, _product$photo$image;

  const {
    product
  } = cartItem;
  if (!product) return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartItemStyles, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: product === null || product === void 0 ? void 0 : (_product$photo = product.photo) === null || _product$photo === void 0 ? void 0 : (_product$photo$image = _product$photo.image) === null || _product$photo$image === void 0 ? void 0 : _product$photo$image.publicUrlTransformed,
      alt: product.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: [(0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__.default)(product.price * cartItem.quantity), " -", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("em", {
          children: [' ', cartItem.quantity, "\xD7 ", (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__.default)(product.price), " l'unit\xE9"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RemoveFromCart__WEBPACK_IMPORTED_MODULE_10__.default, {
      id: cartItem.id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

CartItem.propTypes = {
  cartItem: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    product: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
      photo: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        image: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
          publicUrlTransformed: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
        })
      }),
      price: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
    }),
    quantity: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
  })
};
function Cart() {
  const me = (0,_User__WEBPACK_IMPORTED_MODULE_5__.useUser)();
  const {
    cartOpen,
    closeCart
  } = (0,_lib_cartState__WEBPACK_IMPORTED_MODULE_8__.useCart)();
  if (!me) return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_CartStyles__WEBPACK_IMPORTED_MODULE_3__.default, {
    open: cartOpen,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Supreme__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: ["Panier de ", me.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_CloseButton__WEBPACK_IMPORTED_MODULE_9__.default, {
        type: "button",
        onClick: closeCart,
        children: "\xD7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: me.cart.map(cartItem => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartItem, {
        cartItem: cartItem
      }, cartItem.id, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__.default)((0,_lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_7__.default)(me.cart))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Checkout__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/CartCount.js":
/*!*********************************!*\
  !*** ./components/CartCount.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CartCount; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\vetements\\frontend\\components\\CartCount.js";



const Dot = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "CartCount__Dot",
  componentId: "r65tr3-0"
})(["background:var(--red);color:white;border-radius:50%;padding:0.5rem;line-height:2rem;min-width:3rem;margin-left:1rem;font-feature-settings:'tnum';font-variant-numeric:tabular-nums;"]);
const AnimationStyles = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "CartCount__AnimationStyles",
  componentId: "r65tr3-1"
})(["position:relative;.count{display:block;position:relative;transition:transform 0.2s;backface-visibility:hidden;}.count-enter{transform:scale(4) rotateX(0.5turn);}.count-enter-active{transform:rotateX(0);background:darkred;}.count-exit{top:0;position:absolute;transform:rotateX(0);}.count-exit-active{background:maroon;transform:scale(4) rotateX(0.5turn);}"]);
function CartCount({
  count
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimationStyles, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_2__.TransitionGroup, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_2__.CSSTransition, {
        unmountOnExit: true,
        className: "count",
        classNames: "count",
        timeout: {
          enter: 200,
          exit: 200
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Dot, {
          children: count
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this)
      }, count, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, this);
}
CartCount.propTypes = {
  count: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};

/***/ }),

/***/ "./components/Checkout.js":
/*!********************************!*\
  !*** ./components/Checkout.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Checkout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stripe/react-stripe-js */ "@stripe/react-stripe-js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/stripe-js */ "@stripe/stripe-js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/cartState */ "./lib/cartState.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./User */ "./components/User.js");

var _jsxFileName = "D:\\vetements\\frontend\\components\\Checkout.js";











const CheckoutFormStyles = styled_components__WEBPACK_IMPORTED_MODULE_3___default().form.withConfig({
  displayName: "Checkout__CheckoutFormStyles",
  componentId: "nit1vk-0"
})(["box-shadow:0 1px 2px 2px rgba(0,0,0,0.04);border:1px solid rgba(0,0,0,0.04);border-radius:5px;padding:1rem;display:grid;grid-gap:1rem;"]);
const CREATE_ORDER_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_6___default())`
  mutation CREATE_ORDER_MUTATION($token: String!) {
    checkout(token: $token) {
      id
      charge
      total
      items {
        id
        name
      }
    }
  }
`;
const stripeLib = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__.loadStripe)("pk_test_51J35LuJTfSqaq2GfFIOH9xAFJ8NroXw7Djl7FXD0zFEdOV1Cup4haNE2kAVq0zOpe50SMnLBXfFGwKKDSDSq417q00HktqLkXP");

function CheckoutForm() {
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.useStripe)();
  const elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.useElements)();
  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
  const [checkout, {
    error: graphQLError
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(CREATE_ORDER_MUTATION, {
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_11__.CURRENT_USER_QUERY
    }]
  });
  const {
    closeCart
  } = (0,_lib_cartState__WEBPACK_IMPORTED_MODULE_10__.useCart)();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    setLoading(true);
    nprogress__WEBPACK_IMPORTED_MODULE_5___default().start();
    const {
      error,
      paymentMethod
    } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.CardElement)
    });

    if (error) {
      setError(error);
      nprogress__WEBPACK_IMPORTED_MODULE_5___default().done();
      return;
    }

    if (!error) setError('');
    const order = await checkout({
      variables: {
        token: paymentMethod.id
      }
    });
    closeCart();
    router.push({
      pathname: `/order/[id]`,
      query: {
        id: order.data.checkout.id
      }
    });
    setLoading(false);
    nprogress__WEBPACK_IMPORTED_MODULE_5___default().done();
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CheckoutFormStyles, {
    onSubmit: handleSubmit,
    children: [error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      style: {
        fontSize: 12
      },
      children: error.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }, this), graphQLError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      style: {
        fontSize: 12
      },
      children: graphQLError.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 24
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.CardElement, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_SickButton__WEBPACK_IMPORTED_MODULE_9__.default, {
      disabled: !stripe,
      children: "Paiement"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 5
  }, this);
}

function Checkout() {
  if (stripeLib) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.Elements, {
      stripe: stripeLib,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CheckoutForm, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this);
  }
}

/***/ }),

/***/ "./components/DisplayError.js":
/*!************************************!*\
  !*** ./components/DisplayError.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\vetements\\frontend\\components\\DisplayError.js";



const ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "DisplayError__ErrorStyles",
  componentId: "sc-1crl594-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

const DisplayError = ({
  error
}) => {
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((error, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ErrorStyles, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        "data-test": "graphql-error",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: "Shoot!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined), error.message.replace('GraphQL error: ', '')]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined));
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ErrorStyles, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      "data-test": "graphql-error",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: "Shoot!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), error.message.replace('GraphQL error: ', '')]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, undefined);
};

DisplayError.defaultProps = {
  error: {}
};
DisplayError.propTypes = {
  error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cart */ "./components/Cart.js");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Search */ "./components/Search.js");

var _jsxFileName = "D:\\vetements\\frontend\\components\\Header.js";





const Logo = styled_components__WEBPACK_IMPORTED_MODULE_2___default().h1.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-1p2hyz4-0"
})(["background:red;font-style:4rem;margin:2rem;position:relative;z-index:2;transform:skew(-7deg);a{color:white;text-decoration:none;text-transform:uppercase;padding:0%.5rem 1rem;}"]);
const HeaderStyled = styled_components__WEBPACK_IMPORTED_MODULE_2___default().header.withConfig({
  displayName: "Header__HeaderStyled",
  componentId: "sc-1p2hyz4-1"
})([".bar{border-bottom:10px solid var(--black,black);display:grid;grid-template-columns:auto 1fr;justify-content:space-between;align-items:stretch;}.sub-bar{display:grid;grid-template-columns:1fr auto;border-bottom:10px solid var(--black,black);}"]);
function Header() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderStyled, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "bar",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/",
          children: "Vetements"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "sub-bar",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Search__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cart__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Nav; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/cartState */ "./lib/cartState.js");
/* harmony import */ var _SignOut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SignOut */ "./components/SignOut.js");
/* harmony import */ var _styles_NavStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/NavStyles */ "./components/styles/NavStyles.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _CartCount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CartCount */ "./components/CartCount.js");


var _jsxFileName = "D:\\vetements\\frontend\\components\\Nav.js";






function Nav() {
  const user = (0,_User__WEBPACK_IMPORTED_MODULE_5__.useUser)();
  const {
    openCart
  } = (0,_lib_cartState__WEBPACK_IMPORTED_MODULE_2__.useCart)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_4__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/products",
      children: "Articles"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/sell",
        children: "Vente"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/account",
        children: "Compte"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/orders",
        children: "Commandes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignOut__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        onClick: openCart,
        children: ["Panier", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CartCount__WEBPACK_IMPORTED_MODULE_6__.default, {
          count: user.cart.reduce((tally, cartItem) => tally + (cartItem.product ? cartItem.quantity : 0), 0)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, this)]
    }, void 0, true), !user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/signin",
        children: "Connexion | Enregistrement"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }, this)
    }, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Page; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");


var _jsxFileName = "D:\\vetements\\frontend\\components\\Page.js";



const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_2__.createGlobalStyle`
@font-face {
  font-family: 'radnika_next';
  src: url('/static/radnikanext-medium-webfont.woff2') format(woff2);
  font-weight: normal
  font-style: normal
}
html {
    --red: #ff0000;
    --black: #393939;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey);
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
    font-size: 62.5%;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  line-height: 2;
}
a{
  text-decoration: none;
  color: var(--black)
}
a:hover{
  text-decoration: underline;
}
button {
  font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;
const InnerStyle = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Page__InnerStyle",
  componentId: "sc-1hnyjwh-0"
})(["max-width:var(--maxWidth);margin:0 auto;padding:2rem;"]);
function Page({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyle, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InnerStyle, {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
Page.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)
};

/***/ }),

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PAGINATION_QUERY": function() { return /* binding */ PAGINATION_QUERY; },
/* harmony export */   "default": function() { return /* binding */ Pagination; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _DisplayError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DisplayError */ "./components/DisplayError.js");
/* harmony import */ var _styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/PaginationStyles */ "./components/styles/PaginationStyles.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ "./config.js");

var _jsxFileName = "D:\\vetements\\frontend\\components\\Pagination.js";








const PAGINATION_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_3___default())`
  query PAGINATION_QUERY {
    _allProductsMeta {
      count
    }
  }
`;
function Pagination({
  page
}) {
  const {
    error,
    loading,
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(PAGINATION_QUERY);
  if (loading) return 'Chargement en cours';
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DisplayError__WEBPACK_IMPORTED_MODULE_6__.default, {
    error: error
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 21
  }, this);
  const {
    count
  } = data._allProductsMeta;
  const pageCount = Math.ceil(count / _config__WEBPACK_IMPORTED_MODULE_8__.perPage);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_7__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: ["Vetements - Page ", page, " sur ", pageCount]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
      href: `/products/${page - 1}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        "aria-disabled": page == 1,
        children: "\u21A9 Pr\xE9c\xE9dente"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["Page ", page, " sur ", pageCount]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: [" ", count, " articles"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
      href: `/products/${page + 1}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        "aria-disabled": page >= pageCount,
        children: "Suivante \u21AA "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
Pagination.propTypes = {
  page: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)
};

/***/ }),

/***/ "./components/RemoveFromCart.js":
/*!**************************************!*\
  !*** ./components/RemoveFromCart.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RemoveFromCart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");

var _jsxFileName = "D:\\vetements\\frontend\\components\\RemoveFromCart.js";




 // import { CURRENT_USER_QUERY } from './User';

const BigButton = styled_components__WEBPACK_IMPORTED_MODULE_4___default().button.withConfig({
  displayName: "RemoveFromCart__BigButton",
  componentId: "xbz1rt-0"
})(["font-size:3rem;background:none;border:0;&:hover{color:var(--red);cursor:pointer;}"]);
const REMOVE_FROM_CART_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_3___default())`
  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`; // Autre solution pour update le cache

function update(cache, payload) {
  cache.evict( // {
  //   id: 'ROOT_QUERY',
  //   field: 'User.cart',
  //   args: { id: payload.data.deleteCartItem.id },
  // }
  cache.identify(payload.data.deleteCartItem));
} // ou encore on peut utiliser InMemoryCaching, cache.readQuery et cache.writeQuery


function RemoveFromCart({
  id
}) {
  const [removeFromCart, {
    loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(REMOVE_FROM_CART_MUTATION, {
    variables: {
      id
    },
    update // refetchQueries: [{ query: CURRENT_USER_QUERY }],

  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BigButton, {
    type: "button",
    onClick: removeFromCart,
    disabled: loading,
    title: "Enlever du panier",
    children: "\xD7"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, this);
}
RemoveFromCart.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};

/***/ }),

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Search; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! downshift */ "downshift");
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(downshift__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.debounce */ "lodash.debounce");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var _styles_DropDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/DropDown */ "./components/styles/DropDown.js");

var _jsxFileName = "D:\\vetements\\frontend\\components\\Search.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const SEARCH_PRODUCTS_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_3___default())`
  query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {
    searchTerms: allProducts(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          { description_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;
function Search() {
  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const [findItems, {
    data,
    loading,
    error
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useLazyQuery)(SEARCH_PRODUCTS_QUERY, {
    fetchPolicy: 'no-cache'
  });
  const items = (data === null || data === void 0 ? void 0 : data.searchTerms) || [];
  const findItemsButChill = lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default()(findItems, 800);
  (0,downshift__WEBPACK_IMPORTED_MODULE_2__.resetIdCounter)();
  const {
    isOpen,
    inputValue,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex
  } = (0,downshift__WEBPACK_IMPORTED_MODULE_2__.useCombobox)({
    items,

    onInputValueChange() {
      findItemsButChill({
        variables: {
          searchTerm: inputValue
        }
      });
    },

    onSelectedItemChange({
      selectedItem
    }) {
      router.push({
        pathname: `/product/${selectedItem.id}`
      });
    },

    itemToString: item => (item === null || item === void 0 ? void 0 : item.name) || ''
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_6__.SearchStyles, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({}, getComboboxProps()), {}, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({}, getInputProps({
        type: 'search',
        placeholder: 'Recherche...',
        id: 'search',
        className: loading ? 'loading' : ''
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_6__.DropDown, _objectSpread(_objectSpread({}, getMenuProps()), {}, {
      children: [isOpen && items.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_6__.DropDownItem, _objectSpread(_objectSpread({}, getItemProps({
        item
      })), {}, {
        highlighted: index === highlightedIndex,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: item.photo.image.publicUrlTransformed,
          alt: item.name,
          width: "50"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 15
        }, this), item.name]
      }), item.id, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }, this)), isOpen && !items.length && !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_6__.DropDownItem, {
        children: ["Aucun r\xE9sultat \xE0 votre recherche de ", inputValue]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/SignOut.js":
/*!*******************************!*\
  !*** ./components/SignOut.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignOut; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./components/User.js");

var _jsxFileName = "D:\\vetements\\frontend\\components\\SignOut.js";



const SIGNOUT_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  mutation {
    endSession
  }
`;
function SignOut() {
  const [signout] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(SIGNOUT_MUTATION, {
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_3__.CURRENT_USER_QUERY
    }]
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "button",
    onClick: signout,
    children: "D\xE9connexion"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CURRENT_USER_QUERY": function() { return /* binding */ CURRENT_USER_QUERY; },
/* harmony export */   "useUser": function() { return /* binding */ useUser; }
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const CURRENT_USER_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
        cart {
          id
          quantity
          product {
            id
            name
            price
            description
            photo {
              image {
                publicUrlTransformed
              }
            }
          }
        }
      }
    }
  }
`;
function useUser() {
  const {
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(CURRENT_USER_QUERY);
  return data === null || data === void 0 ? void 0 : data.authenticatedItem;
}

/***/ }),

/***/ "./components/styles/CartStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/CartStyles.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CartStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CartStyles",
  componentId: "sc-1dq8rwj-0"
})(["padding:20px;position:relative;background:white;position:fixed;height:100%;top:0;right:0;width:40%;min-width:500px;bottom:0;transform:translateX(100%);transition:all 0.3s;box-shadow:0 0 10px 3px rgba(0,0,0,0.2);z-index:5;display:grid;grid-template-rows:auto 1fr auto;", ";header{border-bottom:5px solid var(--black);margin-bottom:2rem;padding-bottom:2rem;}footer{border-top:10px double var(--black);margin-top:2rem;padding-top:2rem;align-items:center;font-size:3rem;font-weight:900;p{margin:0;}}ul{margin:0;padding:0;list-style:none;overflow:scroll;}"], props => props.open && `transform: translateX(0);`);
/* harmony default export */ __webpack_exports__["default"] = (CartStyles);

/***/ }),

/***/ "./components/styles/CloseButton.js":
/*!******************************************!*\
  !*** ./components/styles/CloseButton.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "CloseButton",
  componentId: "sc-3glmg5-0"
})(["background:black;color:white;font-size:3rem;border:0;position:absolute;z-index:2;right:0;"]);
/* harmony default export */ __webpack_exports__["default"] = (CloseButton);

/***/ }),

/***/ "./components/styles/DropDown.js":
/*!***************************************!*\
  !*** ./components/styles/DropDown.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropDown": function() { return /* binding */ DropDown; },
/* harmony export */   "DropDownItem": function() { return /* binding */ DropDownItem; },
/* harmony export */   "SearchStyles": function() { return /* binding */ SearchStyles; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const DropDown = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "DropDown",
  componentId: "sc-1akrzp5-0"
})(["position:absolute;width:100%;z-index:2;border:1px solid var(--lightGrey);"]);
const DropDownItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "DropDown__DropDownItem",
  componentId: "sc-1akrzp5-1"
})(["border-bottom:1px solid var(--lightGrey);background:", ";padding:1rem;transition:all 0.2s;", ";display:flex;align-items:center;border-left:10px solid ", ";img{margin-right:10px;}"], props => props.highlighted ? '#f7f7f7' : 'white', props => props.highlighted ? 'padding-left: 2rem;' : null, props => props.highlighted ? props.theme.lightgrey : 'white');
const glow = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["from{box-shadow:0 0 0px yellow;}to{box-shadow:0 0 10px 1px yellow;}"]);
const SearchStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "DropDown__SearchStyles",
  componentId: "sc-1akrzp5-2"
})(["position:relative;input{width:100%;padding:10px;border:0;font-size:2rem;&.loading{animation:", " 0.5s ease-in-out infinite alternate;}}"], glow);


/***/ }),

/***/ "./components/styles/NavStyles.js":
/*!****************************************!*\
  !*** ./components/styles/NavStyles.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const NavStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "NavStyles",
  componentId: "td6vxz-0"
})(["margin:0;padding:0;display:flex;justify-self:end;font-size:2rem;a,button{padding:1rem 3rem;display:flex;align-items:center;position:relative;text-transform:uppercase;font-weight:900;font-size:1em;background:none;border:0;cursor:pointer;@media (max-width:700px){font-size:10px;padding:0 10px;}&:before{content:'';width:2px;background:var(--lightGrey);height:100%;left:0;position:absolute;transform:skew(-20deg);top:0;bottom:0;}&:after{height:2px;background:red;content:'';width:0;position:absolute;transform:translateX(-50%);transition:width 0.4s;transition-timing-function:cubic-bezier(1,-0.65,0,2.31);left:50%;margin-top:2rem;}&:hover,&:focus{outline:none;text-decoration:none;&:after{width:calc(100% - 60px);}@media (max-width:700px){width:calc(100% - 10px);}}}@media (max-width:1300px){border-top:1px solid var(--lightGrey);width:100%;justify-content:center;font-size:1.5rem;}"]);
/* harmony default export */ __webpack_exports__["default"] = (NavStyles);

/***/ }),

/***/ "./components/styles/PaginationStyles.js":
/*!***********************************************!*\
  !*** ./components/styles/PaginationStyles.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PaginationStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "PaginationStyles",
  componentId: "f8urok-0"
})(["text-align:center;display:inline-grid;grid-template-columns:repeat(4,auto);align-items:stretch;justify-content:center;align-content:center;margin:2rem 0;border:1px solid var(--lightGrey);border-radius:10px;& > *{margin:0;padding:15px 30px;border-right:1px solid var(--lightGrey);&:last-child{border-right:0;}}a[aria-disabled='true']{color:grey;pointer-events:none;}"]);
/* harmony default export */ __webpack_exports__["default"] = (PaginationStyles);

/***/ }),

/***/ "./components/styles/SickButton.js":
/*!*****************************************!*\
  !*** ./components/styles/SickButton.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SickButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "SickButton",
  componentId: "ntzlfv-0"
})(["background:red;color:white;font-weight:500;border:0;border-radius:0;text-transform:uppercase;font-size:2rem;padding:0.8rem 1.5rem;transform:skew(-2deg);display:inline-block;transition:all 0.5s;&[disabled]{opacity:0.5;}"]);
/* harmony default export */ __webpack_exports__["default"] = (SickButton);

/***/ }),

/***/ "./components/styles/Supreme.js":
/*!**************************************!*\
  !*** ./components/styles/Supreme.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Supreme = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
  displayName: "Supreme",
  componentId: "sc-1rkki5v-0"
})(["background:var(--red);color:white;display:inline-block;padding:4px 5px;transform:skew(-3deg);margin:0;font-size:4rem;"]);
/* harmony default export */ __webpack_exports__["default"] = (Supreme);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "endpoint": function() { return /* binding */ endpoint; },
/* harmony export */   "prodEndpoint": function() { return /* binding */ prodEndpoint; },
/* harmony export */   "perPage": function() { return /* binding */ perPage; }
/* harmony export */ });
// This is client side config only - don't put anything in here that shouldn't be public!
const endpoint = `http://localhost:3000/api/graphql`;
const prodEndpoint = `fill me in when we deploy`;
const perPage = 2;

/***/ }),

/***/ "./lib/calcTotalPrice.js":
/*!*******************************!*\
  !*** ./lib/calcTotalPrice.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ calcTotalPrice; }
/* harmony export */ });
function calcTotalPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.product) return tally;
    return tally + cartItem.product.price * cartItem.quantity;
  }, 0);
}

/***/ }),

/***/ "./lib/cartState.js":
/*!**************************!*\
  !*** ./lib/cartState.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartStateProvider": function() { return /* binding */ CartStateProvider; },
/* harmony export */   "useCart": function() { return /* binding */ useCart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\vetements\\frontend\\lib\\cartState.js";


const LocalStateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({
  children
}) {
  const {
    0: cartOpen,
    1: setCartOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);

  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  function closeCart() {
    setCartOpen(false);
  }

  function openCart() {
    setCartOpen(true);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LocalStateProvider, {
    value: {
      cartOpen,
      setCartOpen,
      toggleCart,
      closeCart,
      openCart
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

CartStateProvider.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)
};

function useCart() {
  const all = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(LocalStateContext);
  return all;
}



/***/ }),

/***/ "./lib/formatMoney.js":
/*!****************************!*\
  !*** ./lib/formatMoney.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ formatMoney; }
/* harmony export */ });
function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
  };
  if (amount % 100 === 0) options.minimumFractionDigits = 0;
  const formatter = Intl.NumberFormat('fr-FR', options);
  return formatter.format(amount / 100);
}

/***/ }),

/***/ "./lib/paginationField.js":
/*!********************************!*\
  !*** ./lib/paginationField.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ paginationField; }
/* harmony export */ });
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Pagination */ "./components/Pagination.js");

function paginationField() {
  return {
    keyArgs: false,

    read(existing = [], {
      args,
      cache
    }) {
      var _data$_allProductsMet;

      // On retourne le cache ou false pour faire une requete
      const {
        skip,
        first
      } = args;
      const data = cache.readQuery({
        query: _components_Pagination__WEBPACK_IMPORTED_MODULE_0__.PAGINATION_QUERY
      });
      const count = data === null || data === void 0 ? void 0 : (_data$_allProductsMet = data._allProductsMeta) === null || _data$_allProductsMet === void 0 ? void 0 : _data$_allProductsMet.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);
      const items = existing.slice(skip, skip + first).filter(x => x); // Lorsqu'il n'y a pas 2 objets par page pour la derniere page

      if (items.length && items.length !== first && page === pages) {
        return items;
      }

      if (items.length !== first) {
        return false;
      }

      if (items.length) {
        return items;
      }

      return false;
    },

    merge(existing, incoming, {
      args
    }) {
      const {
        skip,
        first
      } = args;
      const merged = existing ? existing.slice(0) : [];

      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }

      return merged;
    }

  };
}

/***/ }),

/***/ "./lib/withData.js":
/*!*************************!*\
  !*** ./lib/withData.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_link_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/link-error */ "@apollo/link-error");
/* harmony import */ var _apollo_link_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_link_error__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/react/ssr */ "@apollo/client/react/ssr");
/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-upload-client */ "apollo-upload-client");
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-with-apollo */ "next-with-apollo");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _paginationField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paginationField */ "./lib/paginationField.js");








function createClient({
  headers,
  initialState
}) {
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
    link: _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloLink.from([(0,_apollo_link_error__WEBPACK_IMPORTED_MODULE_1__.onError)(({
      graphQLErrors,
      networkError
    }) => {
      if (graphQLErrors) graphQLErrors.forEach(({
        message,
        locations,
        path
      }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
      if (networkError) console.log(`[Network error]: ${networkError}. Backend is unreachable. Is it running?`);
    }), // this uses apollo-link-http under the hood, so all the options here come from that package
    (0,apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__.createUploadLink)({
      uri:  true ? _config__WEBPACK_IMPORTED_MODULE_5__.endpoint : 0,
      fetchOptions: {
        credentials: 'include'
      },
      // pass the headers along from this request. This enables SSR with logged in state
      headers
    })]),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // TODO: We will add this together!
            allProducts: (0,_paginationField__WEBPACK_IMPORTED_MODULE_6__.default)()
          }
        }
      }
    }).restore(initialState || {})
  });
}

/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default()(createClient, {
  getDataFromTree: _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__.getDataFromTree
}));

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/styles/nprogress.css */ "./components/styles/nprogress.css");
/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/cartState */ "./lib/cartState.js");
/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/withData */ "./lib/withData.js");

var _jsxFileName = "D:\\vetements\\frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on('routeChangeStart', () => nprogress__WEBPACK_IMPORTED_MODULE_3___default().start());
next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on('routeChangeComplete', () => nprogress__WEBPACK_IMPORTED_MODULE_3___default().done());
next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on('routeChangeError', () => nprogress__WEBPACK_IMPORTED_MODULE_3___default().done());

function myApp({
  Component,
  pageProps,
  apollo
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {
    client: apollo,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_cartState__WEBPACK_IMPORTED_MODULE_6__.CartStateProvider, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Page__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

myApp.getInitialProps = async function ({
  Component,
  ctx
}) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps.query = ctx.query;
  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_lib_withData__WEBPACK_IMPORTED_MODULE_7__.default)(myApp));

/***/ }),

/***/ "./components/styles/nprogress.css":
/*!*****************************************!*\
  !*** ./components/styles/nprogress.css ***!
  \*****************************************/
/***/ (function() {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "@apollo/client/react/ssr":
/*!*******************************************!*\
  !*** external "@apollo/client/react/ssr" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client/react/ssr");;

/***/ }),

/***/ "@apollo/link-error":
/*!*************************************!*\
  !*** external "@apollo/link-error" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/link-error");;

/***/ }),

/***/ "@stripe/react-stripe-js":
/*!******************************************!*\
  !*** external "@stripe/react-stripe-js" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@stripe/react-stripe-js");;

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@stripe/stripe-js");;

/***/ }),

/***/ "apollo-upload-client":
/*!***************************************!*\
  !*** external "apollo-upload-client" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("apollo-upload-client");;

/***/ }),

/***/ "downshift":
/*!****************************!*\
  !*** external "downshift" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("downshift");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "lodash.debounce":
/*!**********************************!*\
  !*** external "lodash.debounce" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("lodash.debounce");;

/***/ }),

/***/ "next-with-apollo":
/*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-with-apollo");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("nprogress");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-transition-group");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZXRlbWVudHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vdmV0ZW1lbnRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9DYXJ0Q291bnQuanMiLCJ3ZWJwYWNrOi8vdmV0ZW1lbnRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9DaGVja291dC5qcyIsIndlYnBhY2s6Ly92ZXRlbWVudHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL0Rpc3BsYXlFcnJvci5qcyIsIndlYnBhY2s6Ly92ZXRlbWVudHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly92ZXRlbWVudHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL05hdi5qcyIsIndlYnBhY2s6Ly92ZXRlbWVudHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vdmV0ZW1lbnRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzIiwid2VicGFjazovL3ZldGVtZW50cy1mcm9udGVuZC8uL2NvbXBvbmVudHMvUmVtb3ZlRnJvbUNhcnQuanMiLCJ3ZWJwYWNrOi8vdmV0ZW1lbnRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vdmV0ZW1lbnRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9TaWduT3V0LmpzIiwid2VicGFjazovL3ZldGVtZW50cy1mcm9udGVuZC8uL2NvbXBvbmVudHMvVXNlci5qcyIsIndlYnBhY2s6Ly92ZXRlbWVudHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9DYXJ0U3R5bGVzLmpzIiwid2VicGFjazovL3ZldGVtZW50cy1mcm9udGVuZC8uL2NvbXBvbmVudHMvc3R5bGVzL0Nsb3NlQnV0dG9uLmpzIiwid2VicGFjazovL3ZldGVtZW50cy1mcm9udGVuZC8uL2NvbXBvbmVudHMvc3R5bGVzL0Ryb3BEb3duLmpzIiwid2VicGFjazovL3ZldGVtZW50cy1mcm9udGVuZC8uL2NvbXBvbmVudHMvc3R5bGVzL05hdlN0eWxlcy5qcyIsIndlYnBhY2s6Ly92ZXRlbWVudHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9QYWdpbmF0aW9uU3R5bGVzLmpzIiwid2VicGFjazovL3ZldGVtZW50cy1mcm9udGVuZC8uL2NvbXBvbmVudHMvc3R5bGVzL1NpY2tCdXR0b24uanMiLCJ3ZWJwYWNrOi8vdmV0ZW1lbnRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9zdHlsZXMvU3VwcmVtZS5qcyIsIndlYnBhY2s6Ly92ZXRlbWVudHMtZnJvbnRlbmQvLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vdmV0ZW1lbnRzLWZyb250ZW5kLy4vbGliL2NhbGNUb3RhbFByaWNlLmpzIiwid2VicGFjazovL3ZldGVtZW50cy1mcm9udGVuZC8uL2xpYi9jYXJ0U3RhdGUuanMiLCJ3ZWJwYWNrOi8vdmV0ZW1lbnRzLWZyb250ZW5kLy4vbGliL2Zvcm1hdE1vbmV5LmpzIiwid2VicGFjazovL3ZldGVtZW50cy1mcm9udGVuZC8uL2xpYi9wYWdpbmF0aW9uRmllbGQuanMiLCJ3ZWJwYWNrOi8vdmV0ZW1lbnRzLWZyb250ZW5kLy4vbGliL3dpdGhEYXRhLmpzIiwid2VicGFjazovL3ZldGVtZW50cy1mcm9udGVuZC8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vdmV0ZW1lbnRzLWZyb250ZW5kL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly92ZXRlbWVudHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudC9yZWFjdC9zc3JcIiIsIndlYnBhY2s6Ly92ZXRlbWVudHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJAYXBvbGxvL2xpbmstZXJyb3JcIiIsIndlYnBhY2s6Ly92ZXRlbWVudHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiIiwid2VicGFjazovL3ZldGVtZW50cy1mcm9udGVuZC9leHRlcm5hbCBcIkBzdHJpcGUvc3RyaXBlLWpzXCIiLCJ3ZWJwYWNrOi8vdmV0ZW1lbnRzLWZyb250ZW5kL2V4dGVybmFsIFwiYXBvbGxvLXVwbG9hZC1jbGllbnRcIiIsIndlYnBhY2s6Ly92ZXRlbWVudHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJkb3duc2hpZnRcIiIsIndlYnBhY2s6Ly92ZXRlbWVudHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovL3ZldGVtZW50cy1mcm9udGVuZC9leHRlcm5hbCBcImxvZGFzaC5kZWJvdW5jZVwiIiwid2VicGFjazovL3ZldGVtZW50cy1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQtd2l0aC1hcG9sbG9cIiIsIndlYnBhY2s6Ly92ZXRlbWVudHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vdmV0ZW1lbnRzLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3ZldGVtZW50cy1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3ZldGVtZW50cy1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vdmV0ZW1lbnRzLWZyb250ZW5kL2V4dGVybmFsIFwibnByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vdmV0ZW1lbnRzLWZyb250ZW5kL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL3ZldGVtZW50cy1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdmV0ZW1lbnRzLWZyb250ZW5kL2V4dGVybmFsIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiIiwid2VicGFjazovL3ZldGVtZW50cy1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3ZldGVtZW50cy1mcm9udGVuZC9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vdmV0ZW1lbnRzLWZyb250ZW5kL2lnbm9yZWR8RDpcXHZldGVtZW50c1xcZnJvbnRlbmRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJDYXJ0SXRlbVN0eWxlcyIsInN0eWxlZCIsIkNhcnRJdGVtIiwiY2FydEl0ZW0iLCJwcm9kdWN0IiwicGhvdG8iLCJpbWFnZSIsInB1YmxpY1VybFRyYW5zZm9ybWVkIiwibmFtZSIsImZvcm1hdE1vbmV5IiwicHJpY2UiLCJxdWFudGl0eSIsImlkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibnVtYmVyIiwiQ2FydCIsIm1lIiwidXNlVXNlciIsImNhcnRPcGVuIiwiY2xvc2VDYXJ0IiwidXNlQ2FydCIsImNhcnQiLCJtYXAiLCJjYWxjVG90YWxQcmljZSIsIkRvdCIsIkFuaW1hdGlvblN0eWxlcyIsIkNhcnRDb3VudCIsImNvdW50IiwiZW50ZXIiLCJleGl0IiwiQ2hlY2tvdXRGb3JtU3R5bGVzIiwiQ1JFQVRFX09SREVSX01VVEFUSU9OIiwiZ3FsIiwic3RyaXBlTGliIiwibG9hZFN0cmlwZSIsInByb2Nlc3MiLCJDaGVja291dEZvcm0iLCJlcnJvciIsInNldEVycm9yIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInN0cmlwZSIsInVzZVN0cmlwZSIsImVsZW1lbnRzIiwidXNlRWxlbWVudHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjaGVja291dCIsImdyYXBoUUxFcnJvciIsInVzZU11dGF0aW9uIiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsIkNVUlJFTlRfVVNFUl9RVUVSWSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5Qcm9ncmVzcyIsInBheW1lbnRNZXRob2QiLCJjcmVhdGVQYXltZW50TWV0aG9kIiwidHlwZSIsImNhcmQiLCJnZXRFbGVtZW50IiwiQ2FyZEVsZW1lbnQiLCJvcmRlciIsInZhcmlhYmxlcyIsInRva2VuIiwicHVzaCIsInBhdGhuYW1lIiwiZGF0YSIsImZvbnRTaXplIiwibWVzc2FnZSIsIkNoZWNrb3V0IiwiRXJyb3JTdHlsZXMiLCJEaXNwbGF5RXJyb3IiLCJuZXR3b3JrRXJyb3IiLCJyZXN1bHQiLCJlcnJvcnMiLCJsZW5ndGgiLCJpIiwicmVwbGFjZSIsImRlZmF1bHRQcm9wcyIsIm9iamVjdCIsIkxvZ28iLCJIZWFkZXJTdHlsZWQiLCJIZWFkZXIiLCJOYXYiLCJ1c2VyIiwib3BlbkNhcnQiLCJyZWR1Y2UiLCJ0YWxseSIsIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJJbm5lclN0eWxlIiwiUGFnZSIsImNoaWxkcmVuIiwiYW55IiwiUEFHSU5BVElPTl9RVUVSWSIsIlBhZ2luYXRpb24iLCJwYWdlIiwidXNlUXVlcnkiLCJfYWxsUHJvZHVjdHNNZXRhIiwicGFnZUNvdW50IiwiTWF0aCIsImNlaWwiLCJwZXJQYWdlIiwiQmlnQnV0dG9uIiwiUkVNT1ZFX0ZST01fQ0FSVF9NVVRBVElPTiIsInVwZGF0ZSIsImNhY2hlIiwicGF5bG9hZCIsImV2aWN0IiwiaWRlbnRpZnkiLCJkZWxldGVDYXJ0SXRlbSIsIlJlbW92ZUZyb21DYXJ0IiwicmVtb3ZlRnJvbUNhcnQiLCJTRUFSQ0hfUFJPRFVDVFNfUVVFUlkiLCJTZWFyY2giLCJmaW5kSXRlbXMiLCJ1c2VMYXp5UXVlcnkiLCJmZXRjaFBvbGljeSIsIml0ZW1zIiwic2VhcmNoVGVybXMiLCJmaW5kSXRlbXNCdXRDaGlsbCIsImRlYm91bmNlIiwicmVzZXRJZENvdW50ZXIiLCJpc09wZW4iLCJpbnB1dFZhbHVlIiwiZ2V0TWVudVByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsImdldENvbWJvYm94UHJvcHMiLCJnZXRJdGVtUHJvcHMiLCJoaWdobGlnaHRlZEluZGV4IiwidXNlQ29tYm9ib3giLCJvbklucHV0VmFsdWVDaGFuZ2UiLCJzZWFyY2hUZXJtIiwib25TZWxlY3RlZEl0ZW1DaGFuZ2UiLCJzZWxlY3RlZEl0ZW0iLCJpdGVtVG9TdHJpbmciLCJpdGVtIiwicGxhY2Vob2xkZXIiLCJjbGFzc05hbWUiLCJpbmRleCIsIlNJR05PVVRfTVVUQVRJT04iLCJTaWduT3V0Iiwic2lnbm91dCIsImF1dGhlbnRpY2F0ZWRJdGVtIiwiQ2FydFN0eWxlcyIsInByb3BzIiwib3BlbiIsIkNsb3NlQnV0dG9uIiwiRHJvcERvd24iLCJEcm9wRG93bkl0ZW0iLCJoaWdobGlnaHRlZCIsInRoZW1lIiwibGlnaHRncmV5IiwiZ2xvdyIsImtleWZyYW1lcyIsIlNlYXJjaFN0eWxlcyIsIk5hdlN0eWxlcyIsIlBhZ2luYXRpb25TdHlsZXMiLCJTaWNrQnV0dG9uIiwiU3VwcmVtZSIsImVuZHBvaW50IiwicHJvZEVuZHBvaW50IiwiTG9jYWxTdGF0ZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiTG9jYWxTdGF0ZVByb3ZpZGVyIiwiUHJvdmlkZXIiLCJDYXJ0U3RhdGVQcm92aWRlciIsInNldENhcnRPcGVuIiwidG9nZ2xlQ2FydCIsImFsbCIsInVzZUNvbnRleHQiLCJhbW91bnQiLCJvcHRpb25zIiwic3R5bGUiLCJjdXJyZW5jeSIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJmb3JtYXQiLCJwYWdpbmF0aW9uRmllbGQiLCJrZXlBcmdzIiwicmVhZCIsImV4aXN0aW5nIiwiYXJncyIsInNraXAiLCJmaXJzdCIsInJlYWRRdWVyeSIsInBhZ2VzIiwic2xpY2UiLCJmaWx0ZXIiLCJ4IiwibWVyZ2UiLCJpbmNvbWluZyIsIm1lcmdlZCIsImNyZWF0ZUNsaWVudCIsImhlYWRlcnMiLCJpbml0aWFsU3RhdGUiLCJBcG9sbG9DbGllbnQiLCJsaW5rIiwiQXBvbGxvTGluayIsIm9uRXJyb3IiLCJncmFwaFFMRXJyb3JzIiwiZm9yRWFjaCIsImxvY2F0aW9ucyIsInBhdGgiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlVXBsb2FkTGluayIsInVyaSIsImZldGNoT3B0aW9ucyIsImNyZWRlbnRpYWxzIiwiSW5NZW1vcnlDYWNoZSIsInR5cGVQb2xpY2llcyIsIlF1ZXJ5IiwiZmllbGRzIiwiYWxsUHJvZHVjdHMiLCJyZXN0b3JlIiwid2l0aEFwb2xsbyIsImdldERhdGFGcm9tVHJlZSIsIlJvdXRlciIsIk5Qcm9ncmVzcyIsIm15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiYXBvbGxvIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwid2l0aERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsY0FBYyxHQUFHQyxzRUFBSDtBQUFBO0FBQUE7QUFBQSxtS0FBcEI7O0FBZUEsU0FBU0MsUUFBVCxDQUFrQjtBQUFFQztBQUFGLENBQWxCLEVBQWdDO0FBQUE7O0FBQzlCLFFBQU07QUFBRUM7QUFBRixNQUFjRCxRQUFwQjtBQUNBLE1BQUksQ0FBQ0MsT0FBTCxFQUFjLE9BQU8sSUFBUDtBQUNkLHNCQUNFLDhEQUFDLGNBQUQ7QUFBQSw0QkFDRTtBQUNFLFNBQUcsRUFBRUEsT0FBRixhQUFFQSxPQUFGLHlDQUFFQSxPQUFPLENBQUVDLEtBQVgsMkVBQUUsZUFBZ0JDLEtBQWxCLHlEQUFFLHFCQUF1QkMsb0JBRDlCO0FBRUUsU0FBRyxFQUFFSCxPQUFPLENBQUNJO0FBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0U7QUFBQSw4QkFDRTtBQUFBLGtCQUFLSixPQUFPLENBQUNJO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxtQkFDR0MseURBQVcsQ0FBQ0wsT0FBTyxDQUFDTSxLQUFSLEdBQWdCUCxRQUFRLENBQUNR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b0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0FBRURGLEtBQUssQ0FBQ0ksZUFBTixHQUF3QixnQkFBZ0I7QUFBRUgsV0FBRjtBQUFhSTtBQUFiLENBQWhCLEVBQW9DO0FBQzFELE1BQUlILFNBQVMsR0FBRyxFQUFoQjs7QUFDQSxNQUFJRCxTQUFTLENBQUNHLGVBQWQsRUFBK0I7QUFDN0JGLGFBQVMsR0FBRyxNQUFNRCxTQUFTLENBQUNHLGVBQVYsQ0FBMEJDLEdBQTFCLENBQWxCO0FBQ0Q7O0FBQ0RILFdBQVMsQ0FBQy9LLEtBQVYsR0FBa0JrTCxHQUFHLENBQUNsTCxLQUF0QjtBQUNBLFNBQU87QUFBRStLO0FBQUYsR0FBUDtBQUNELENBUEQ7O0FBU0EsK0RBQWVJLHNEQUFRLENBQUNOLEtBQUQsQ0FBdkIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBLDRDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBDYXJ0U3R5bGVzIGZyb20gJy4vc3R5bGVzL0NhcnRTdHlsZXMnO1xyXG5pbXBvcnQgU3VwcmVtZSBmcm9tICcuL3N0eWxlcy9TdXByZW1lJztcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJy4vVXNlcic7XHJcbmltcG9ydCBmb3JtYXRNb25leSBmcm9tICcuLi9saWIvZm9ybWF0TW9uZXknO1xyXG5pbXBvcnQgY2FsY1RvdGFsUHJpY2UgZnJvbSAnLi4vbGliL2NhbGNUb3RhbFByaWNlJztcclxuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gJy4uL2xpYi9jYXJ0U3RhdGUnO1xyXG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSAnLi9zdHlsZXMvQ2xvc2VCdXR0b24nO1xyXG5pbXBvcnQgUmVtb3ZlRnJvbUNhcnQgZnJvbSAnLi9SZW1vdmVGcm9tQ2FydCc7XHJcbmltcG9ydCBDaGVja291dCBmcm9tICcuL0NoZWNrb3V0JztcclxuXHJcbmNvbnN0IENhcnRJdGVtU3R5bGVzID0gc3R5bGVkLmxpYFxyXG4gIHBhZGRpbmc6IDFyZW0gMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHRHcmV5KTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcclxuICBpbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxuICBoMyxcclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBDYXJ0SXRlbSh7IGNhcnRJdGVtIH0pIHtcclxuICBjb25zdCB7IHByb2R1Y3QgfSA9IGNhcnRJdGVtO1xyXG4gIGlmICghcHJvZHVjdCkgcmV0dXJuIG51bGw7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0SXRlbVN0eWxlcz5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHNyYz17cHJvZHVjdD8ucGhvdG8/LmltYWdlPy5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cclxuICAgICAgICBhbHQ9e3Byb2R1Y3QubmFtZX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDM+e3Byb2R1Y3QubmFtZX08L2gzPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAge2Zvcm1hdE1vbmV5KHByb2R1Y3QucHJpY2UgKiBjYXJ0SXRlbS5xdWFudGl0eSl9IC1cclxuICAgICAgICAgIDxlbT5cclxuICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAge2NhcnRJdGVtLnF1YW50aXR5fSZ0aW1lczsge2Zvcm1hdE1vbmV5KHByb2R1Y3QucHJpY2UpfSBsJ3VuaXTDqVxyXG4gICAgICAgICAgPC9lbT5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8UmVtb3ZlRnJvbUNhcnQgaWQ9e2NhcnRJdGVtLmlkfSAvPlxyXG4gICAgPC9DYXJ0SXRlbVN0eWxlcz5cclxuICApO1xyXG59XHJcblxyXG5DYXJ0SXRlbS5wcm9wVHlwZXMgPSB7XHJcbiAgY2FydEl0ZW06IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHByb2R1Y3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIG5hbWU6IFByb3BUeXBlcy5hbnksXHJcbiAgICAgIHBob3RvOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIGltYWdlOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pLFxyXG4gICAgICBwcmljZTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIH0pLFxyXG4gICAgcXVhbnRpdHk6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgfSksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJ0KCkge1xyXG4gIGNvbnN0IG1lID0gdXNlVXNlcigpO1xyXG4gIGNvbnN0IHsgY2FydE9wZW4sIGNsb3NlQ2FydCB9ID0gdXNlQ2FydCgpO1xyXG4gIGlmICghbWUpIHJldHVybiBudWxsO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydFN0eWxlcyBvcGVuPXtjYXJ0T3Blbn0+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPFN1cHJlbWU+UGFuaWVyIGRlIHttZS5uYW1lfTwvU3VwcmVtZT5cclxuICAgICAgICA8Q2xvc2VCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2Nsb3NlQ2FydH0+XHJcbiAgICAgICAgICAmdGltZXM7XHJcbiAgICAgICAgPC9DbG9zZUJ1dHRvbj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7bWUuY2FydC5tYXAoKGNhcnRJdGVtKSA9PiAoXHJcbiAgICAgICAgICA8Q2FydEl0ZW0ga2V5PXtjYXJ0SXRlbS5pZH0gY2FydEl0ZW09e2NhcnRJdGVtfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8Zm9vdGVyPlxyXG4gICAgICAgIDxwPntmb3JtYXRNb25leShjYWxjVG90YWxQcmljZShtZS5jYXJ0KSl9PC9wPlxyXG4gICAgICAgIDxDaGVja291dCAvPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvQ2FydFN0eWxlcz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IENTU1RyYW5zaXRpb24sIFRyYW5zaXRpb25Hcm91cCB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IERvdCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBsaW5lLWhlaWdodDogMnJlbTtcclxuICBtaW4td2lkdGg6IDNyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAndG51bSc7XHJcbiAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcclxuYDtcclxuXHJcbmNvbnN0IEFuaW1hdGlvblN0eWxlcyA9IHN0eWxlZC5zcGFuYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAuY291bnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgLmNvdW50LWVudGVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoNCkgcm90YXRlWCgwLjV0dXJuKTtcclxuICB9XHJcbiAgLmNvdW50LWVudGVyLWFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMCk7XHJcbiAgICBiYWNrZ3JvdW5kOiBkYXJrcmVkO1xyXG4gIH1cclxuICAuY291bnQtZXhpdCB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMCk7XHJcbiAgfVxyXG4gIC5jb3VudC1leGl0LWFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBtYXJvb247XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDQpIHJvdGF0ZVgoMC41dHVybik7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydENvdW50KHsgY291bnQgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QW5pbWF0aW9uU3R5bGVzPlxyXG4gICAgICA8VHJhbnNpdGlvbkdyb3VwPlxyXG4gICAgICAgIDxDU1NUcmFuc2l0aW9uXHJcbiAgICAgICAgICB1bm1vdW50T25FeGl0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb3VudFwiXHJcbiAgICAgICAgICBjbGFzc05hbWVzPVwiY291bnRcIlxyXG4gICAgICAgICAga2V5PXtjb3VudH1cclxuICAgICAgICAgIHRpbWVvdXQ9e3sgZW50ZXI6IDIwMCwgZXhpdDogMjAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPERvdD57Y291bnR9PC9Eb3Q+XHJcbiAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxyXG4gICAgICA8L1RyYW5zaXRpb25Hcm91cD5cclxuICAgIDwvQW5pbWF0aW9uU3R5bGVzPlxyXG4gICk7XHJcbn1cclxuXHJcbkNhcnRDb3VudC5wcm9wVHlwZXMgPSB7XHJcbiAgY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbn07XHJcbiIsImltcG9ydCB7XHJcbiAgQ2FyZEVsZW1lbnQsXHJcbiAgRWxlbWVudHMsXHJcbiAgdXNlRWxlbWVudHMsXHJcbiAgdXNlU3RyaXBlLFxyXG59IGZyb20gJ0BzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzJztcclxuaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gJ0BzdHJpcGUvc3RyaXBlLWpzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgblByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInO1xyXG5pbXBvcnQgU2lja0J1dHRvbiBmcm9tICcuL3N0eWxlcy9TaWNrQnV0dG9uJztcclxuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gJy4uL2xpYi9jYXJ0U3RhdGUnO1xyXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfSBmcm9tICcuL1VzZXInO1xyXG5cclxuY29uc3QgQ2hlY2tvdXRGb3JtU3R5bGVzID0gc3R5bGVkLmZvcm1gXHJcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWdhcDogMXJlbTtcclxuYDtcclxuXHJcbmNvbnN0IENSRUFURV9PUkRFUl9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBDUkVBVEVfT1JERVJfTVVUQVRJT04oJHRva2VuOiBTdHJpbmchKSB7XHJcbiAgICBjaGVja291dCh0b2tlbjogJHRva2VuKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGNoYXJnZVxyXG4gICAgICB0b3RhbFxyXG4gICAgICBpdGVtcyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBuYW1lXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzdHJpcGVMaWIgPSBsb2FkU3RyaXBlKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUklQRV9LRVkpO1xyXG5cclxuZnVuY3Rpb24gQ2hlY2tvdXRGb3JtKCkge1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgc3RyaXBlID0gdXNlU3RyaXBlKCk7XHJcbiAgY29uc3QgZWxlbWVudHMgPSB1c2VFbGVtZW50cygpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtjaGVja291dCwgeyBlcnJvcjogZ3JhcGhRTEVycm9yIH1dID0gdXNlTXV0YXRpb24oXHJcbiAgICBDUkVBVEVfT1JERVJfTVVUQVRJT04sXHJcbiAgICB7XHJcbiAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogQ1VSUkVOVF9VU0VSX1FVRVJZIH1dLFxyXG4gICAgfVxyXG4gICk7XHJcbiAgY29uc3QgeyBjbG9zZUNhcnQgfSA9IHVzZUNhcnQoKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICghc3RyaXBlIHx8ICFlbGVtZW50cykge1xyXG4gICAgICAvLyBTdHJpcGUuanMgaGFzIG5vdCBsb2FkZWQgeWV0LiBNYWtlIHN1cmUgdG8gZGlzYWJsZVxyXG4gICAgICAvLyBmb3JtIHN1Ym1pc3Npb24gdW50aWwgU3RyaXBlLmpzIGhhcyBsb2FkZWQuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBuUHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgIGNvbnN0IHsgZXJyb3IsIHBheW1lbnRNZXRob2QgfSA9IGF3YWl0IHN0cmlwZS5jcmVhdGVQYXltZW50TWV0aG9kKHtcclxuICAgICAgdHlwZTogJ2NhcmQnLFxyXG4gICAgICBjYXJkOiBlbGVtZW50cy5nZXRFbGVtZW50KENhcmRFbGVtZW50KSxcclxuICAgIH0pO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHNldEVycm9yKGVycm9yKTtcclxuICAgICAgblByb2dyZXNzLmRvbmUoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCFlcnJvcikgc2V0RXJyb3IoJycpO1xyXG4gICAgY29uc3Qgb3JkZXIgPSBhd2FpdCBjaGVja291dCh7XHJcbiAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgIHRva2VuOiBwYXltZW50TWV0aG9kLmlkLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBjbG9zZUNhcnQoKTtcclxuICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgcGF0aG5hbWU6IGAvb3JkZXIvW2lkXWAsXHJcbiAgICAgIHF1ZXJ5OiB7IGlkOiBvcmRlci5kYXRhLmNoZWNrb3V0LmlkIH0sXHJcbiAgICB9KTtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgblByb2dyZXNzLmRvbmUoKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxDaGVja291dEZvcm1TdHlsZXMgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIHtlcnJvciAmJiA8cCBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0+e2Vycm9yLm1lc3NhZ2V9PC9wPn1cclxuICAgICAge2dyYXBoUUxFcnJvciAmJiA8cCBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0+e2dyYXBoUUxFcnJvci5tZXNzYWdlfTwvcD59XHJcbiAgICAgIDxDYXJkRWxlbWVudCAvPlxyXG4gICAgICA8U2lja0J1dHRvbiBkaXNhYmxlZD17IXN0cmlwZX0+UGFpZW1lbnQ8L1NpY2tCdXR0b24+XHJcbiAgICA8L0NoZWNrb3V0Rm9ybVN0eWxlcz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGVja291dCgpIHtcclxuICBpZiAoc3RyaXBlTGliKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RWxlbWVudHMgc3RyaXBlPXtzdHJpcGVMaWJ9PlxyXG4gICAgICAgIDxDaGVja291dEZvcm0gLz5cclxuICAgICAgPC9FbGVtZW50cz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgRXJyb3JTdHlsZXMgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAycmVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luOiAycmVtIDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgfVxuICBzdHJvbmcge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgfVxuYDtcblxuY29uc3QgRGlzcGxheUVycm9yID0gKHsgZXJyb3IgfSkgPT4ge1xuICBpZiAoIWVycm9yIHx8ICFlcnJvci5tZXNzYWdlKSByZXR1cm4gbnVsbDtcbiAgaWYgKFxuICAgIGVycm9yLm5ldHdvcmtFcnJvciAmJlxuICAgIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQgJiZcbiAgICBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0LmVycm9ycy5sZW5ndGhcbiAgKSB7XG4gICAgcmV0dXJuIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQuZXJyb3JzLm1hcCgoZXJyb3IsIGkpID0+IChcbiAgICAgIDxFcnJvclN0eWxlcyBrZXk9e2l9PlxuICAgICAgICA8cCBkYXRhLXRlc3Q9XCJncmFwaHFsLWVycm9yXCI+XG4gICAgICAgICAgPHN0cm9uZz5TaG9vdCE8L3N0cm9uZz5cbiAgICAgICAgICB7ZXJyb3IubWVzc2FnZS5yZXBsYWNlKCdHcmFwaFFMIGVycm9yOiAnLCAnJyl9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvRXJyb3JTdHlsZXM+XG4gICAgKSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8RXJyb3JTdHlsZXM+XG4gICAgICA8cCBkYXRhLXRlc3Q9XCJncmFwaHFsLWVycm9yXCI+XG4gICAgICAgIDxzdHJvbmc+U2hvb3QhPC9zdHJvbmc+XG4gICAgICAgIHtlcnJvci5tZXNzYWdlLnJlcGxhY2UoJ0dyYXBoUUwgZXJyb3I6ICcsICcnKX1cbiAgICAgIDwvcD5cbiAgICA8L0Vycm9yU3R5bGVzPlxuICApO1xufTtcblxuRGlzcGxheUVycm9yLmRlZmF1bHRQcm9wcyA9IHtcbiAgZXJyb3I6IHt9LFxufTtcblxuRGlzcGxheUVycm9yLnByb3BUeXBlcyA9IHtcbiAgZXJyb3I6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5RXJyb3I7XG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IENhcnQgZnJvbSAnLi9DYXJ0JztcclxuaW1wb3J0IE5hdiBmcm9tICcuL05hdic7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2gnO1xyXG5cclxuY29uc3QgTG9nbyA9IHN0eWxlZC5oMWBcclxuICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgZm9udC1zdHlsZTogNHJlbTtcclxuICBtYXJnaW46IDJyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgdHJhbnNmb3JtOiBza2V3KC03ZGVnKTtcclxuICBhIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwYWRkaW5nOiAwJS41cmVtIDFyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSGVhZGVyU3R5bGVkID0gc3R5bGVkLmhlYWRlcmBcclxuICAuYmFyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdmFyKC0tYmxhY2ssIGJsYWNrKTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgfVxyXG4gIC5zdWItYmFyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCB2YXIoLS1ibGFjaywgYmxhY2spO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWRlclN0eWxlZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj5cclxuICAgICAgICA8TG9nbz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+VmV0ZW1lbnRzPC9MaW5rPlxyXG4gICAgICAgIDwvTG9nbz5cclxuICAgICAgICA8TmF2IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1iYXJcIj5cclxuICAgICAgICA8U2VhcmNoIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Q2FydCAvPlxyXG4gICAgPC9IZWFkZXJTdHlsZWQ+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSAnLi4vbGliL2NhcnRTdGF0ZSc7XHJcbmltcG9ydCBTaWduT3V0IGZyb20gJy4vU2lnbk91dCc7XHJcbmltcG9ydCBOYXZTdHlsZXMgZnJvbSAnLi9zdHlsZXMvTmF2U3R5bGVzJztcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJy4vVXNlcic7XHJcbmltcG9ydCBDYXJ0Q291bnQgZnJvbSAnLi9DYXJ0Q291bnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KCkge1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VVc2VyKCk7XHJcbiAgY29uc3QgeyBvcGVuQ2FydCB9ID0gdXNlQ2FydCgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TmF2U3R5bGVzPlxyXG4gICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzXCI+QXJ0aWNsZXM8L0xpbms+XHJcbiAgICAgIHt1c2VyICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zZWxsXCI+VmVudGU8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2FjY291bnRcIj5Db21wdGU8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL29yZGVyc1wiPkNvbW1hbmRlczwvTGluaz5cclxuICAgICAgICAgIDxTaWduT3V0IC8+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtvcGVuQ2FydH0+XHJcbiAgICAgICAgICAgIFBhbmllclxyXG4gICAgICAgICAgICA8Q2FydENvdW50XHJcbiAgICAgICAgICAgICAgY291bnQ9e3VzZXIuY2FydC5yZWR1Y2UoXHJcbiAgICAgICAgICAgICAgICAodGFsbHksIGNhcnRJdGVtKSA9PlxyXG4gICAgICAgICAgICAgICAgICB0YWxseSArIChjYXJ0SXRlbS5wcm9kdWN0ID8gY2FydEl0ZW0ucXVhbnRpdHkgOiAwKSxcclxuICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHshdXNlciAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbmluXCI+Q29ubmV4aW9uIHwgRW5yZWdpc3RyZW1lbnQ8L0xpbms+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L05hdlN0eWxlcz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5cclxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdyYWRuaWthX25leHQnO1xyXG4gIHNyYzogdXJsKCcvc3RhdGljL3JhZG5pa2FuZXh0LW1lZGl1bS13ZWJmb250LndvZmYyJykgZm9ybWF0KHdvZmYyKTtcclxuICBmb250LXdlaWdodDogbm9ybWFsXHJcbiAgZm9udC1zdHlsZTogbm9ybWFsXHJcbn1cclxuaHRtbCB7XHJcbiAgICAtLXJlZDogI2ZmMDAwMDtcclxuICAgIC0tYmxhY2s6ICMzOTM5Mzk7XHJcbiAgICAtLWdyZXk6ICMzQTNBM0E7XHJcbiAgICAtLWdyYXk6IHZhcigtLWdyZXkpO1xyXG4gICAgLS1saWdodEdyZXk6ICNlMWUxZTE7XHJcbiAgICAtLWxpZ2h0R3JheTogdmFyKC0tbGlnaHRHcmV5KTtcclxuICAgIC0tb2ZmV2hpdGU6ICNlZGVkZWQ7XHJcbiAgICAtLW1heFdpZHRoOiAxMDAwcHg7XHJcbiAgICAtLWJzOiAwIDEycHggMjRweCAwIHJnYmEoMCwwLDAsMC4wOSk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1zaXplOiA2Mi41JTtcclxufVxyXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XHJcbiAgYm94LXNpemluZzogaW5oZXJpdDtcclxufVxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ3JhZG5pa2FfbmV4dCcsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBsaW5lLWhlaWdodDogMjtcclxufVxyXG5he1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tYmxhY2spXHJcbn1cclxuYTpob3ZlcntcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5idXR0b24ge1xyXG4gIGZvbnQtZmFtaWx5OiAncmFkbmlrYV9uZXh0JywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG59XHJcbmA7XHJcblxyXG5jb25zdCBJbm5lclN0eWxlID0gc3R5bGVkLmRpdmBcclxuICBtYXgtd2lkdGg6IHZhcigtLW1heFdpZHRoKTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAycmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSh7IGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPElubmVyU3R5bGU+e2NoaWxkcmVufTwvSW5uZXJTdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcblBhZ2UucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxyXG59O1xyXG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBEaXNwbGF5RXJyb3IgZnJvbSAnLi9EaXNwbGF5RXJyb3InO1xyXG5pbXBvcnQgUGFnaW5hdGlvblN0eWxlcyBmcm9tICcuL3N0eWxlcy9QYWdpbmF0aW9uU3R5bGVzJztcclxuaW1wb3J0IHsgcGVyUGFnZSB9IGZyb20gJy4uL2NvbmZpZyc7XHJcblxyXG5leHBvcnQgY29uc3QgUEFHSU5BVElPTl9RVUVSWSA9IGdxbGBcclxuICBxdWVyeSBQQUdJTkFUSU9OX1FVRVJZIHtcclxuICAgIF9hbGxQcm9kdWN0c01ldGEge1xyXG4gICAgICBjb3VudFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2luYXRpb24oeyBwYWdlIH0pIHtcclxuICBjb25zdCB7IGVycm9yLCBsb2FkaW5nLCBkYXRhIH0gPSB1c2VRdWVyeShQQUdJTkFUSU9OX1FVRVJZKTtcclxuXHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiAnQ2hhcmdlbWVudCBlbiBjb3Vycyc7XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3J9IC8+O1xyXG5cclxuICBjb25zdCB7IGNvdW50IH0gPSBkYXRhLl9hbGxQcm9kdWN0c01ldGE7XHJcbiAgY29uc3QgcGFnZUNvdW50ID0gTWF0aC5jZWlsKGNvdW50IC8gcGVyUGFnZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnaW5hdGlvblN0eWxlcz5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAgVmV0ZW1lbnRzIC0gUGFnZSB7cGFnZX0gc3VyIHtwYWdlQ291bnR9XHJcbiAgICAgICAgPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3RzLyR7cGFnZSAtIDF9YH0+XHJcbiAgICAgICAgPGEgYXJpYS1kaXNhYmxlZD17cGFnZSA9PSAxfT7ihqkgUHLDqWPDqWRlbnRlPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFBhZ2Uge3BhZ2V9IHN1ciB7cGFnZUNvdW50fVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwPiB7Y291bnR9IGFydGljbGVzPC9wPlxyXG4gICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3RzLyR7cGFnZSArIDF9YH0+XHJcbiAgICAgICAgPGEgYXJpYS1kaXNhYmxlZD17cGFnZSA+PSBwYWdlQ291bnR9PlN1aXZhbnRlIOKGqiA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvUGFnaW5hdGlvblN0eWxlcz5cclxuICApO1xyXG59XHJcblxyXG5QYWdpbmF0aW9uLnByb3BUeXBlcyA9IHtcclxuICBwYWdlOiBQcm9wVHlwZXMuYW55LFxyXG59O1xyXG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XHJcbi8vIGltcG9ydCB7IENVUlJFTlRfVVNFUl9RVUVSWSB9IGZyb20gJy4vVXNlcic7XHJcblxyXG5jb25zdCBCaWdCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogMDtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFJFTU9WRV9GUk9NX0NBUlRfTVVUQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gUkVNT1ZFX0ZST01fQ0FSVF9NVVRBVElPTigkaWQ6IElEISkge1xyXG4gICAgZGVsZXRlQ2FydEl0ZW0oaWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbi8vIEF1dHJlIHNvbHV0aW9uIHBvdXIgdXBkYXRlIGxlIGNhY2hlXHJcbmZ1bmN0aW9uIHVwZGF0ZShjYWNoZSwgcGF5bG9hZCkge1xyXG4gIGNhY2hlLmV2aWN0KFxyXG4gICAgLy8ge1xyXG4gICAgLy8gICBpZDogJ1JPT1RfUVVFUlknLFxyXG4gICAgLy8gICBmaWVsZDogJ1VzZXIuY2FydCcsXHJcbiAgICAvLyAgIGFyZ3M6IHsgaWQ6IHBheWxvYWQuZGF0YS5kZWxldGVDYXJ0SXRlbS5pZCB9LFxyXG4gICAgLy8gfVxyXG4gICAgY2FjaGUuaWRlbnRpZnkocGF5bG9hZC5kYXRhLmRlbGV0ZUNhcnRJdGVtKVxyXG4gICk7XHJcbn1cclxuLy8gb3UgZW5jb3JlIG9uIHBldXQgdXRpbGlzZXIgSW5NZW1vcnlDYWNoaW5nLCBjYWNoZS5yZWFkUXVlcnkgZXQgY2FjaGUud3JpdGVRdWVyeVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVtb3ZlRnJvbUNhcnQoeyBpZCB9KSB7XHJcbiAgY29uc3QgW3JlbW92ZUZyb21DYXJ0LCB7IGxvYWRpbmcgfV0gPSB1c2VNdXRhdGlvbihSRU1PVkVfRlJPTV9DQVJUX01VVEFUSU9OLCB7XHJcbiAgICB2YXJpYWJsZXM6IHsgaWQgfSxcclxuICAgIHVwZGF0ZSxcclxuICAgIC8vIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogQ1VSUkVOVF9VU0VSX1FVRVJZIH1dLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJpZ0J1dHRvblxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgb25DbGljaz17cmVtb3ZlRnJvbUNhcnR9XHJcbiAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICB0aXRsZT1cIkVubGV2ZXIgZHUgcGFuaWVyXCJcclxuICAgID5cclxuICAgICAgJnRpbWVzO1xyXG4gICAgPC9CaWdCdXR0b24+XHJcbiAgKTtcclxufVxyXG5cclxuUmVtb3ZlRnJvbUNhcnQucHJvcFR5cGVzID0ge1xyXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VMYXp5UXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCB7IHJlc2V0SWRDb3VudGVyLCB1c2VDb21ib2JveCB9IGZyb20gJ2Rvd25zaGlmdCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLmRlYm91bmNlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTZWFyY2hTdHlsZXMsIERyb3BEb3duLCBEcm9wRG93bkl0ZW0gfSBmcm9tICcuL3N0eWxlcy9Ecm9wRG93bic7XHJcblxyXG5jb25zdCBTRUFSQ0hfUFJPRFVDVFNfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgU0VBUkNIX1BST0RVQ1RTX1FVRVJZKCRzZWFyY2hUZXJtOiBTdHJpbmchKSB7XHJcbiAgICBzZWFyY2hUZXJtczogYWxsUHJvZHVjdHMoXHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgT1I6IFtcclxuICAgICAgICAgIHsgbmFtZV9jb250YWluc19pOiAkc2VhcmNoVGVybSB9XHJcbiAgICAgICAgICB7IGRlc2NyaXB0aW9uX2NvbnRhaW5zX2k6ICRzZWFyY2hUZXJtIH1cclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIHBob3RvIHtcclxuICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbZmluZEl0ZW1zLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTGF6eVF1ZXJ5KFxyXG4gICAgU0VBUkNIX1BST0RVQ1RTX1FVRVJZLFxyXG4gICAge1xyXG4gICAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcclxuICAgIH1cclxuICApO1xyXG4gIGNvbnN0IGl0ZW1zID0gZGF0YT8uc2VhcmNoVGVybXMgfHwgW107XHJcbiAgY29uc3QgZmluZEl0ZW1zQnV0Q2hpbGwgPSBkZWJvdW5jZShmaW5kSXRlbXMsIDgwMCk7XHJcbiAgcmVzZXRJZENvdW50ZXIoKTtcclxuICBjb25zdCB7XHJcbiAgICBpc09wZW4sXHJcbiAgICBpbnB1dFZhbHVlLFxyXG4gICAgZ2V0TWVudVByb3BzLFxyXG4gICAgZ2V0SW5wdXRQcm9wcyxcclxuICAgIGdldENvbWJvYm94UHJvcHMsXHJcbiAgICBnZXRJdGVtUHJvcHMsXHJcbiAgICBoaWdobGlnaHRlZEluZGV4LFxyXG4gIH0gPSB1c2VDb21ib2JveCh7XHJcbiAgICBpdGVtcyxcclxuICAgIG9uSW5wdXRWYWx1ZUNoYW5nZSgpIHtcclxuICAgICAgZmluZEl0ZW1zQnV0Q2hpbGwoe1xyXG4gICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgc2VhcmNoVGVybTogaW5wdXRWYWx1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvblNlbGVjdGVkSXRlbUNoYW5nZSh7IHNlbGVjdGVkSXRlbSB9KSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICBwYXRobmFtZTogYC9wcm9kdWN0LyR7c2VsZWN0ZWRJdGVtLmlkfWAsXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGl0ZW1Ub1N0cmluZzogKGl0ZW0pID0+IGl0ZW0/Lm5hbWUgfHwgJycsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWFyY2hTdHlsZXM+XHJcbiAgICAgIDxkaXYgey4uLmdldENvbWJvYm94UHJvcHMoKX0+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB7Li4uZ2V0SW5wdXRQcm9wcyh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdzZWFyY2gnLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1JlY2hlcmNoZS4uLicsXHJcbiAgICAgICAgICAgIGlkOiAnc2VhcmNoJyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBsb2FkaW5nID8gJ2xvYWRpbmcnIDogJycsXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPERyb3BEb3duIHsuLi5nZXRNZW51UHJvcHMoKX0+XHJcbiAgICAgICAge2lzT3BlbiAmJlxyXG4gICAgICAgICAgaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8RHJvcERvd25JdGVtXHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgIHsuLi5nZXRJdGVtUHJvcHMoeyBpdGVtIH0pfVxyXG4gICAgICAgICAgICAgIGhpZ2hsaWdodGVkPXtpbmRleCA9PT0gaGlnaGxpZ2h0ZWRJbmRleH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17aXRlbS5waG90by5pbWFnZS5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cclxuICAgICAgICAgICAgICAgIGFsdD17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCI1MFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICA8L0Ryb3BEb3duSXRlbT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIHtpc09wZW4gJiYgIWl0ZW1zLmxlbmd0aCAmJiAhbG9hZGluZyAmJiAoXHJcbiAgICAgICAgICA8RHJvcERvd25JdGVtPlxyXG4gICAgICAgICAgICBBdWN1biByw6lzdWx0YXQgw6Agdm90cmUgcmVjaGVyY2hlIGRlIHtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgPC9Ecm9wRG93bkl0ZW0+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Ecm9wRG93bj5cclxuICAgIDwvU2VhcmNoU3R5bGVzPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfSBmcm9tICcuL1VzZXInO1xyXG5cclxuY29uc3QgU0lHTk9VVF9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiB7XHJcbiAgICBlbmRTZXNzaW9uXHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbk91dCgpIHtcclxuICBjb25zdCBbc2lnbm91dF0gPSB1c2VNdXRhdGlvbihTSUdOT1VUX01VVEFUSU9OLCB7XHJcbiAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IENVUlJFTlRfVVNFUl9RVUVSWSB9XSxcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17c2lnbm91dH0+XHJcbiAgICAgIETDqWNvbm5leGlvblxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENVUlJFTlRfVVNFUl9RVUVSWSA9IGdxbGBcclxuICBxdWVyeSB7XHJcbiAgICBhdXRoZW50aWNhdGVkSXRlbSB7XHJcbiAgICAgIC4uLiBvbiBVc2VyIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIGVtYWlsXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIGNhcnQge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHF1YW50aXR5XHJcbiAgICAgICAgICBwcm9kdWN0IHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICBwaG90byB7XHJcbiAgICAgICAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlVXNlcigpIHtcclxuICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5KENVUlJFTlRfVVNFUl9RVUVSWSk7XHJcbiAgcmV0dXJuIGRhdGE/LmF1dGhlbnRpY2F0ZWRJdGVtO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBDYXJ0U3R5bGVzID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA0MCU7XG4gIG1pbi13aWR0aDogNTAwcHg7XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgei1pbmRleDogNTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xuICAkeyhwcm9wcykgPT4gcHJvcHMub3BlbiAmJiBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO2B9O1xuICBoZWFkZXIge1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS1ibGFjayk7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgfVxuICBmb290ZXIge1xuICAgIGJvcmRlci10b3A6IDEwcHggZG91YmxlIHZhcigtLWJsYWNrKTtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG4gIHVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRTdHlsZXM7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQ2xvc2VCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDNyZW07XG4gIGJvcmRlcjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICByaWdodDogMDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IENsb3NlQnV0dG9uO1xuIiwiaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IERyb3BEb3duID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHRHcmV5KTtcbmA7XG5cbmNvbnN0IERyb3BEb3duSXRlbSA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saWdodEdyZXkpO1xuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gKHByb3BzLmhpZ2hsaWdodGVkID8gJyNmN2Y3ZjcnIDogJ3doaXRlJyl9O1xuICBwYWRkaW5nOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgJHsocHJvcHMpID0+IChwcm9wcy5oaWdobGlnaHRlZCA/ICdwYWRkaW5nLWxlZnQ6IDJyZW07JyA6IG51bGwpfTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWRcbiAgICAkeyhwcm9wcykgPT4gKHByb3BzLmhpZ2hsaWdodGVkID8gcHJvcHMudGhlbWUubGlnaHRncmV5IDogJ3doaXRlJyl9O1xuICBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuYDtcblxuY29uc3QgZ2xvdyA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDBweCB5ZWxsb3c7XG4gIH1cblxuICB0byB7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMXB4IHllbGxvdztcbiAgfVxuYDtcblxuY29uc3QgU2VhcmNoU3R5bGVzID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgICYubG9hZGluZyB7XG4gICAgICBhbmltYXRpb246ICR7Z2xvd30gMC41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgeyBEcm9wRG93biwgRHJvcERvd25JdGVtLCBTZWFyY2hTdHlsZXMgfTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBOYXZTdHlsZXMgPSBzdHlsZWQudWxgXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYSxcbiAgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxcmVtIDNyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgIH1cbiAgICAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHdpZHRoOiAycHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodEdyZXkpO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRyYW5zZm9ybTogc2tldygtMjBkZWcpO1xuICAgICAgdG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgIH1cbiAgICAmOmFmdGVyIHtcbiAgICAgIGhlaWdodDogMnB4O1xuICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgY29udGVudDogJyc7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNHM7XG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEsIC0wLjY1LCAwLCAyLjMxKTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgfVxuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1saWdodEdyZXkpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZTdHlsZXM7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgUGFnaW5hdGlvblN0eWxlcyA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIGF1dG8pO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAycmVtIDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0R3JleSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICYgPiAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0R3JleSk7XG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICB9XG4gIH1cbiAgYVthcmlhLWRpc2FibGVkPSd0cnVlJ10ge1xuICAgIGNvbG9yOiBncmV5O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uU3R5bGVzO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFNpY2tCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDJyZW07XG4gIHBhZGRpbmc6IDAuOHJlbSAxLjVyZW07XG4gIHRyYW5zZm9ybTogc2tldygtMmRlZyk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICZbZGlzYWJsZWRdIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFNpY2tCdXR0b247XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgU3VwcmVtZSA9IHN0eWxlZC5oM2BcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDRweCA1cHg7XG4gIHRyYW5zZm9ybTogc2tldygtM2RlZyk7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiA0cmVtO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgU3VwcmVtZTtcbiIsIi8vIFRoaXMgaXMgY2xpZW50IHNpZGUgY29uZmlnIG9ubHkgLSBkb24ndCBwdXQgYW55dGhpbmcgaW4gaGVyZSB0aGF0IHNob3VsZG4ndCBiZSBwdWJsaWMhXG5leHBvcnQgY29uc3QgZW5kcG9pbnQgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ncmFwaHFsYDtcbmV4cG9ydCBjb25zdCBwcm9kRW5kcG9pbnQgPSBgZmlsbCBtZSBpbiB3aGVuIHdlIGRlcGxveWA7XG5leHBvcnQgY29uc3QgcGVyUGFnZSA9IDI7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYWxjVG90YWxQcmljZShjYXJ0KSB7XHJcbiAgcmV0dXJuIGNhcnQucmVkdWNlKCh0YWxseSwgY2FydEl0ZW0pID0+IHtcclxuICAgIGlmICghY2FydEl0ZW0ucHJvZHVjdCkgcmV0dXJuIHRhbGx5O1xyXG4gICAgcmV0dXJuIHRhbGx5ICsgY2FydEl0ZW0ucHJvZHVjdC5wcmljZSAqIGNhcnRJdGVtLnF1YW50aXR5O1xyXG4gIH0sIDApO1xyXG59XHJcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTG9jYWxTdGF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmNvbnN0IExvY2FsU3RhdGVQcm92aWRlciA9IExvY2FsU3RhdGVDb250ZXh0LlByb3ZpZGVyO1xyXG5cclxuZnVuY3Rpb24gQ2FydFN0YXRlUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW2NhcnRPcGVuLCBzZXRDYXJ0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZUNhcnQoKSB7XHJcbiAgICBzZXRDYXJ0T3BlbighY2FydE9wZW4pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xvc2VDYXJ0KCkge1xyXG4gICAgc2V0Q2FydE9wZW4oZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb3BlbkNhcnQoKSB7XHJcbiAgICBzZXRDYXJ0T3Blbih0cnVlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TG9jYWxTdGF0ZVByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7IGNhcnRPcGVuLCBzZXRDYXJ0T3BlbiwgdG9nZ2xlQ2FydCwgY2xvc2VDYXJ0LCBvcGVuQ2FydCB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0xvY2FsU3RhdGVQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5DYXJ0U3RhdGVQcm92aWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXHJcbn07XHJcblxyXG5mdW5jdGlvbiB1c2VDYXJ0KCkge1xyXG4gIGNvbnN0IGFsbCA9IHVzZUNvbnRleHQoTG9jYWxTdGF0ZUNvbnRleHQpO1xyXG4gIHJldHVybiBhbGw7XHJcbn1cclxuXHJcbmV4cG9ydCB7IENhcnRTdGF0ZVByb3ZpZGVyLCB1c2VDYXJ0IH07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdE1vbmV5KCBhbW91bnQgPSAwKSB7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIHN0eWxlOiAnY3VycmVuY3knLFxyXG4gICAgICAgIGN1cnJlbmN5OiAnRVVSJyxcclxuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDJcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGFtb3VudCAlIDEwMCA9PT0gMCkgb3B0aW9ucy5taW5pbXVtRnJhY3Rpb25EaWdpdHMgPSAwXHJcblxyXG4gICAgY29uc3QgZm9ybWF0dGVyID0gSW50bC5OdW1iZXJGb3JtYXQoJ2ZyLUZSJywgb3B0aW9ucyk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm1hdHRlci5mb3JtYXQoYW1vdW50IC8gMTAwKVxyXG59IiwiaW1wb3J0IHsgUEFHSU5BVElPTl9RVUVSWSB9IGZyb20gJy4uL2NvbXBvbmVudHMvUGFnaW5hdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdpbmF0aW9uRmllbGQoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGtleUFyZ3M6IGZhbHNlLFxyXG4gICAgcmVhZChleGlzdGluZyA9IFtdLCB7IGFyZ3MsIGNhY2hlIH0pIHtcclxuICAgICAgLy8gT24gcmV0b3VybmUgbGUgY2FjaGUgb3UgZmFsc2UgcG91ciBmYWlyZSB1bmUgcmVxdWV0ZVxyXG4gICAgICBjb25zdCB7IHNraXAsIGZpcnN0IH0gPSBhcmdzO1xyXG4gICAgICBjb25zdCBkYXRhID0gY2FjaGUucmVhZFF1ZXJ5KHsgcXVlcnk6IFBBR0lOQVRJT05fUVVFUlkgfSk7XHJcbiAgICAgIGNvbnN0IGNvdW50ID0gZGF0YT8uX2FsbFByb2R1Y3RzTWV0YT8uY291bnQ7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBza2lwIC8gZmlyc3QgKyAxO1xyXG4gICAgICBjb25zdCBwYWdlcyA9IE1hdGguY2VpbChjb3VudCAvIGZpcnN0KTtcclxuICAgICAgY29uc3QgaXRlbXMgPSBleGlzdGluZy5zbGljZShza2lwLCBza2lwICsgZmlyc3QpLmZpbHRlcigoeCkgPT4geCk7XHJcbiAgICAgIC8vIExvcnNxdSdpbCBuJ3kgYSBwYXMgMiBvYmpldHMgcGFyIHBhZ2UgcG91ciBsYSBkZXJuaWVyZSBwYWdlXHJcbiAgICAgIGlmIChpdGVtcy5sZW5ndGggJiYgaXRlbXMubGVuZ3RoICE9PSBmaXJzdCAmJiBwYWdlID09PSBwYWdlcykge1xyXG4gICAgICAgIHJldHVybiBpdGVtcztcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbXMubGVuZ3RoICE9PSBmaXJzdCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBtZXJnZShleGlzdGluZywgaW5jb21pbmcsIHsgYXJncyB9KSB7XHJcbiAgICAgIGNvbnN0IHsgc2tpcCwgZmlyc3QgfSA9IGFyZ3M7XHJcbiAgICAgIGNvbnN0IG1lcmdlZCA9IGV4aXN0aW5nID8gZXhpc3Rpbmcuc2xpY2UoMCkgOiBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IHNraXA7IGkgPCBza2lwICsgaW5jb21pbmcubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBtZXJnZWRbaV0gPSBpbmNvbWluZ1tpIC0gc2tpcF07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG1lcmdlZDtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIEFwb2xsb0xpbmssIEluTWVtb3J5Q2FjaGUgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgeyBvbkVycm9yIH0gZnJvbSAnQGFwb2xsby9saW5rLWVycm9yJztcbmltcG9ydCB7IGdldERhdGFGcm9tVHJlZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50L3JlYWN0L3Nzcic7XG5pbXBvcnQgeyBjcmVhdGVVcGxvYWRMaW5rIH0gZnJvbSAnYXBvbGxvLXVwbG9hZC1jbGllbnQnO1xuaW1wb3J0IHdpdGhBcG9sbG8gZnJvbSAnbmV4dC13aXRoLWFwb2xsbyc7XG5pbXBvcnQgeyBlbmRwb2ludCwgcHJvZEVuZHBvaW50IH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCBwYWdpbmF0aW9uRmllbGQgZnJvbSAnLi9wYWdpbmF0aW9uRmllbGQnO1xuXG5mdW5jdGlvbiBjcmVhdGVDbGllbnQoeyBoZWFkZXJzLCBpbml0aWFsU3RhdGUgfSkge1xuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgbGluazogQXBvbGxvTGluay5mcm9tKFtcbiAgICAgIG9uRXJyb3IoKHsgZ3JhcGhRTEVycm9ycywgbmV0d29ya0Vycm9yIH0pID0+IHtcbiAgICAgICAgaWYgKGdyYXBoUUxFcnJvcnMpXG4gICAgICAgICAgZ3JhcGhRTEVycm9ycy5mb3JFYWNoKCh7IG1lc3NhZ2UsIGxvY2F0aW9ucywgcGF0aCB9KSA9PlxuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgIGBbR3JhcGhRTCBlcnJvcl06IE1lc3NhZ2U6ICR7bWVzc2FnZX0sIExvY2F0aW9uOiAke2xvY2F0aW9uc30sIFBhdGg6ICR7cGF0aH1gXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgaWYgKG5ldHdvcmtFcnJvcilcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIGBbTmV0d29yayBlcnJvcl06ICR7bmV0d29ya0Vycm9yfS4gQmFja2VuZCBpcyB1bnJlYWNoYWJsZS4gSXMgaXQgcnVubmluZz9gXG4gICAgICAgICAgKTtcbiAgICAgIH0pLFxuICAgICAgLy8gdGhpcyB1c2VzIGFwb2xsby1saW5rLWh0dHAgdW5kZXIgdGhlIGhvb2QsIHNvIGFsbCB0aGUgb3B0aW9ucyBoZXJlIGNvbWUgZnJvbSB0aGF0IHBhY2thZ2VcbiAgICAgIGNyZWF0ZVVwbG9hZExpbmsoe1xuICAgICAgICB1cmk6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gZW5kcG9pbnQgOiBwcm9kRW5kcG9pbnQsXG4gICAgICAgIGZldGNoT3B0aW9uczoge1xuICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHBhc3MgdGhlIGhlYWRlcnMgYWxvbmcgZnJvbSB0aGlzIHJlcXVlc3QuIFRoaXMgZW5hYmxlcyBTU1Igd2l0aCBsb2dnZWQgaW4gc3RhdGVcbiAgICAgICAgaGVhZGVycyxcbiAgICAgIH0pLFxuICAgIF0pLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSh7XG4gICAgICB0eXBlUG9saWNpZXM6IHtcbiAgICAgICAgUXVlcnk6IHtcbiAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgIC8vIFRPRE86IFdlIHdpbGwgYWRkIHRoaXMgdG9nZXRoZXIhXG4gICAgICAgICAgICBhbGxQcm9kdWN0czogcGFnaW5hdGlvbkZpZWxkKCksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSkucmVzdG9yZShpbml0aWFsU3RhdGUgfHwge30pLFxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyhjcmVhdGVDbGllbnQsIHsgZ2V0RGF0YUZyb21UcmVlIH0pO1xuIiwiaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5pbXBvcnQgUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2UnO1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvc3R5bGVzL25wcm9ncmVzcy5jc3MnO1xyXG5pbXBvcnQgeyBDYXJ0U3RhdGVQcm92aWRlciB9IGZyb20gJy4uL2xpYi9jYXJ0U3RhdGUnO1xyXG5pbXBvcnQgd2l0aERhdGEgZnJvbSAnLi4vbGliL3dpdGhEYXRhJztcclxuXHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCAoKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKSk7XHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xyXG5cclxuZnVuY3Rpb24gbXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgYXBvbGxvIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17YXBvbGxvfT5cclxuICAgICAgPENhcnRTdGF0ZVByb3ZpZGVyPlxyXG4gICAgICAgIDxQYWdlPlxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvUGFnZT5cclxuICAgICAgPC9DYXJ0U3RhdGVQcm92aWRlcj5cclxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxubXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKHsgQ29tcG9uZW50LCBjdHggfSkge1xyXG4gIGxldCBwYWdlUHJvcHMgPSB7fTtcclxuICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xyXG4gICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG4gIH1cclxuICBwYWdlUHJvcHMucXVlcnkgPSBjdHgucXVlcnk7XHJcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoRGF0YShteUFwcCk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudC9yZWFjdC9zc3JcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vbGluay1lcnJvclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHN0cmlwZS9yZWFjdC1zdHJpcGUtanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHJpcGUvc3RyaXBlLWpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tdXBsb2FkLWNsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG93bnNoaWZ0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoLmRlYm91bmNlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXdpdGgtYXBvbGxvXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJucHJvZ3Jlc3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9