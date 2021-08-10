import * as T from './Table.styles';
import { TableInstance } from 'react-table';
import NoData from '../NoData/NoData';
import { transparentize } from 'polished';


export default function Table<T extends Object>({ instance }: { instance: TableInstance<T> }) {
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    rows
  } = instance;

  return (
    <>
      <T.Wrapper cellPadding={0} cellSpacing={0} {...getTableProps()}>
        <T.Heading>
          {
            headerGroups.map(headerGroup => {
              const { key, ...restHeaderGroupProps } = headerGroup.getHeaderGroupProps();
              return (
                <T.HeadingRow key={key} {...restHeaderGroupProps}>
                  {
                    headerGroup.headers.map(column => {
                      const { key, ...restColumnProps } = column.getHeaderProps();
                      return (
                        <T.HeadingCell key={key} {...restColumnProps}>
                          {column.render('Header')}
                        </T.HeadingCell>
                      )
                    })
                  }
                </T.HeadingRow>
              )
            })
          }
        </T.Heading>
        <T.Body {...getTableBodyProps()}>
          {
            rows.map(row => {
              prepareRow(row);
              const { key, ...restRowProps } = row.getRowProps();
              return (
                <T.BodyRow key={key} {...restRowProps}>
                  {
                    row.cells.map(cell => {
                      const { key, ...restCellProps } = cell.getCellProps()
                      return (
                        <T.BodyCell key={key} {...restCellProps}>
                          {cell.render('Cell')}
                        </T.BodyCell>
                      )
                    })
                  }
                </T.BodyRow>
              )
            })
          }
        </T.Body>
      </T.Wrapper>
      {
        !rows.length &&
        <div style={{ backgroundColor: transparentize(0.95, '#274060') }}>
          <NoData height={360} />
        </div>
      }
    </>
  );
}
