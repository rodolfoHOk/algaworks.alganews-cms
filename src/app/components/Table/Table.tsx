import * as T from './Table.styles';
import { TableInstance } from 'react-table';
import NoData from '../NoData/NoData';
import { transparentize } from 'polished';
import Button from '../Button/Button';
import { useEffect } from 'react';

interface TableProps<T extends object> {
  instance: TableInstance<T>;
  onPaginate?: (newPage: number) => any;

}


export default function Table<T extends Object>({
  instance,
  onPaginate
}: TableProps<T>) {
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    rows,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: {
      pageIndex,
    }
  } = instance;

  useEffect(() => {
    onPaginate &&
      onPaginate(pageIndex);
  }, [pageIndex, onPaginate]);

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

      <T.TablePagination>
        <Button
          variant={'primary'}
          label={'Primeira página'}
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        />
        <Button
          variant={'primary'}
          label={'Página anterior'}
          onClick={previousPage}
          disabled={!canPreviousPage}
        />
        <Button
          variant={'primary'}
          label={'Próxima página'}
          onClick={nextPage}
          disabled={!canNextPage}
        />
        <Button
          variant={'primary'}
          label={'Última página'}
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        />
        <span>
          Página {pageIndex + 1} de {pageOptions.length}
        </span>
      </T.TablePagination>
    </>
  );
}
