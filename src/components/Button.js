import React, { Component } from "react";
import styled, { css } from "react-emotion";
import mq from "../utils/mq";
import typography, { rhythm } from "../utils/typography";
import PropTypes from 'prop-types';
import { Link } from "gatsby";

export const CloseBtn = styled(Link)`
  display: block;
  width: 4rem;
  height: 4rem;
  font-size: 4rem;
  line-height: 1;
  text-align: center;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 1rem;
  color: ${props => props.theme.primary.color};
  &:hover {
    color: coral;
  }
`