import "@testing-library/jest-dom";
import { fireEvent, render, screen } from '@testing-library/react';
import JobsTable from './JobsTable'; // Your Data Grid component to be tested
import React from 'react';

describe("Jobs Table Component ", () => {

  const headrows = [
    {
      id: 1,
      jobs_title: 'Software Engineer',
      priority: 'High',
      client: 'ABC Corp',
      experience: 1,
      posted_date: '2022-01-01',
      vacancies: 5,
      location: 'New York',
      associated_candidates: 10,
      contact_person: 'John Doe',
      status: 'Active',
    },
    {
      id: 2,
      jobs_title: 'Software Engineer2',
      priority: 'High',
      client: 'ABC Corp',
      experience: 2,
      posted_date: '2022-01-01',
      vacancies: 5,
      location: 'New York',
      associated_candidates: 10,
      contact_person: 'John Doe',
      status: 'Active',
    },
    {
      id: 3,
      jobs_title: 'Software Engineer3',
      priority: 'High',
      client: 'ABC Corp',
      experience: 3,
      posted_date: '2022-01-01',
      vacancies: 5,
      location: 'New York',
      associated_candidates: 10,
      contact_person: 'John Doe',
      status: 'Active',
    },
    {
      id: 4,
      jobs_title: 'Software Engineer4',
      priority: 'High',
      client: 'ABC Corp',
      experience: 4,
      posted_date: '2022-01-01',
      vacancies: 5,
      location: 'New York',
      associated_candidates: 10,
      contact_person: 'John Doe',
      status: 'Active',
    },
    {
      id: 5,
      jobs_title: 'Software Engineer5',
      priority: 'High',
      client: 'ABC Corp',
      experience: 5,
      posted_date: '2022-01-01',
      vacancies: 5,
      location: 'New York',
      associated_candidates: 10,
      contact_person: 'John Doe',
      status: 'Active',
    },
  ];

  const headercolumn = [
    { field: 'jobs_title', headerName: 'Job Title' },
    { field: 'priority', headerName: 'Priority' },
    { field: 'client', headerName: 'Client' },
    { field: 'experience', headerName: 'Experience' },
    { field: 'posted_date', headerName: 'Posted Date' },
    { field: 'vacancies', headerName: 'Vacancies' },
    { field: 'location', headerName: 'Location' },
    { field: 'associated_candidates', headerName: 'Associated Candidates' },
    { field: 'contact_person', headerName: 'Contact Person' },
    { field: 'status', headerName: 'Status' },
  ];

  test('renders without errors', () => {
    render(
      <JobsTable
        headrows={headrows}
        headercolumn={headercolumn}
      />
    );

    expect(screen.getByTestId('jobs-table')).toBeInTheDocument();
  });

  test('displays correct number of column headers', () => {
    render(
      <JobsTable
        headrows={headrows}
        headercolumn={headercolumn}
      />
    );
    const headerCells = screen.getAllByRole("columnheader");

    expect(headerCells.length).toBe(headercolumn.length);

    expect(screen.getByText('Job Title')).toBeInTheDocument();
    expect(screen.getByText('Priority')).toBeInTheDocument();
    expect(screen.getByText('Client')).toBeInTheDocument();
    expect(screen.getByText('Vacancies')).toBeInTheDocument();
  });

  it("displays correct number of rows", () => {
    const {getAllByRole} = render(
      <JobsTable headrows={headrows} headercolumn={headercolumn} />
    );
    const rows = getAllByRole("row");

    expect(rows.length - 1).toBe(headrows.length);
  });

});