import React, { Component } from "react";
import styled, { css } from "react-emotion";
import mq from "../utils/mq";
import typography, { rhythm } from "../utils/typography";
import PropTypes from 'prop-types';
import { Link } from "gatsby";

export const CloseBtn = styled(Link)`
  display: block;
  width: 4rem;
  font-size: 4rem;
  //line-height: 1;
  //height: 0; /* weird block bug fix */
  text-align: center;
`