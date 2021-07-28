import * as WPC from './WordPriceCounter.styles';

export interface WordPriceCounterProps {
  wordCount: number;
  pricePerWord: number;
}

function WordPriceCounter(props: WordPriceCounterProps) {
  if (props.wordCount < 0)
    throw Error('A quantidade de palavras não pode ser negativa');

  return <WPC.Wrapper>
    <WPC.WordCounter>
      {props.wordCount} palavras
    </WPC.WordCounter>
    <WPC.PricePreview>
      {(props.wordCount * props.pricePerWord).toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
        maximumFractionDigits: 2
      })}
    </WPC.PricePreview>
  </WPC.Wrapper>
}

export default WordPriceCounter;
