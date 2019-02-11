import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Categories = ({ categories, onChange }) => (
  <Wrapper>
    <h1>Categories</h1>
    <div>
      <Select onChange={onChange}>
        <option value="" defaultValue>
          all jokes
        </option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>
    </div>
  </Wrapper>
);
export default Categories;

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 7px 16px;
`;

const Select = styled.select`
  font-size: 1rem;
  width: 150px;
  height: 35px;
  border: 1px solid #d7d7d7;
  border-radius: 4.71px;
  padding: 0px 7px;
`;
