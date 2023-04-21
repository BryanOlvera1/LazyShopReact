 const FounderSection = require("./FounderSection")


 import React from 'react';
import { render } from '@testing-library/react';
// import FounderSection from './FounderSection';
test('renders the correct information', () => {
    const { getByText } = render(<FounderSection />);
    expect(getByText('Meet Our Founder')).toBeInTheDocument();
    expect(getByText('Bryan Olvera')).toBeInTheDocument();
    expect(getByText('CEO &amp; Founder')).toBeInTheDocument();
    expect(getByText(/Bryan Olvera, the founder of The Lazy Shop/)).toBeInTheDocument();
  });
  