import { BottomContainer, CounterText } from './Footer.styled.ts';
import { Button } from '../../../../shared/ui';
import { ItemType, VisibilityFilter } from '../../model/types.ts';

type Props = {
  todos: ItemType[];
  onSetVisibilityFilter: React.Dispatch<React.SetStateAction<VisibilityFilter>>;
  visibilityFilter: VisibilityFilter;
  onClearCompleted: () => void;
};

export const Footer = ({
  todos,
  visibilityFilter,
  onSetVisibilityFilter,
  onClearCompleted,
}: Props) => {
  const leftItemsCount = todos.filter(({ isCompleted }) => !isCompleted).length;
  const leftItemsText = `${leftItemsCount} ${leftItemsCount > 1 ? 'items' : 'items'} left`;

  const isAllFilter = visibilityFilter === 'all';
  const isCompletedFilter = visibilityFilter === 'completed';
  const isActiveFilter = visibilityFilter === 'active';

  const isDisabledClear = leftItemsCount === todos.length;

  return (
    <BottomContainer>
      <CounterText $isVisible={!!leftItemsCount}>{leftItemsText}</CounterText>
      <div>
        <Button
          isActive={isAllFilter}
          dataTestId="allButton"
          isDisabled={isAllFilter}
          onClick={() => onSetVisibilityFilter('all')}
        >
          All
        </Button>
        <Button
          dataTestId="activeButton"
          isActive={isActiveFilter}
          isDisabled={isActiveFilter}
          onClick={() => onSetVisibilityFilter('active')}
        >
          Active
        </Button>
        <Button
          dataTestId="completedButton"
          isActive={isCompletedFilter}
          isDisabled={isCompletedFilter}
          onClick={() => onSetVisibilityFilter('completed')}
        >
          Completed
        </Button>
      </div>
      <Button dataTestId="clearButton" isDisabled={isDisabledClear} onClick={onClearCompleted}>
        Clear Completed
      </Button>
    </BottomContainer>
  );
};
