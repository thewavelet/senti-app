import React, { useCallback } from 'react';
import {
  FlatList,
  StyleSheet,
} from 'react-native';
import { CoinItem } from 'components';
import { palette } from 'constants/style';

interface Props {
  items: Coin[];
  purchase: (productId: string) => void;
}

const CoinList: React.FunctionComponent<Props> = ({
  items,
  purchase,
}) => {
  const renderItem = useCallback(({ item }: { item: Coin }) => (
    <CoinItem item={item} purchase={purchase} />
  ), []);

  const keyExtractor = (item: Coin) => `coin-${item.id}`;

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.gray[100],
  },
  contentContainer: {
    paddingVertical: 6,
  },
});

export default React.memo(CoinList);