import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UploadDocument, { UploadDocumentProps } from './UploadDocument';
import '@testing-library/jest-dom';
import { getByText, queryByText } from '@testing-library/dom';

describe('UploadDocument', () => {
  const defaultProps: UploadDocumentProps = {
    onClick: jest.fn(),
    label: 'Upload',
  };

  it('renders without errors', () => {
    render(<UploadDocument {...defaultProps} />);
  });

  it('displays the correct label', () => {
    const { getByText } = render(<UploadDocument {...defaultProps} />);
    expect(getByText('Upload')).toBeInTheDocument();
  });

  it('triggers the onClick function when Upload button is clicked', () => {
    const { getByText } = render(<UploadDocument {...defaultProps} />);
    const uploadButton = getByText('Upload');
    fireEvent.click(uploadButton);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
});

it('displays "Drag & drop/Add your File" when no files are selected', () => {
    const { getByText } = render(<UploadDocument label={'Upload'} />);
     expect(getByText('Drag & drop/Add your File')).toBeInTheDocument();
  });









