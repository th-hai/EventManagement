import React from 'react';
import Select from 'react-select';
 
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
 
const Selector = () => {
    // state = {
    //     selectedOption: null,
    // };
    // handleChange = selectedOption => {
    //     this.setState({ selectedOption });
    //     console.log(`Option selected:`, selectedOption);
    // };

    // const { selectedOption } = this.state;
 
    return (
      <Select
      isMulti
        // value={selectedOption}
        // onChange={this.handleChange}
        options={options}
      />
    );
}

export default Selector;