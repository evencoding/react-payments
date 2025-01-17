import type { Meta } from '@storybook/react';

import {
  CardInfoProvider,
  useCardInfoActions,
  useCardInfoValue,
} from '../../../context/CardInfoContext';
import useForm from '../../../hooks/useForm';
import { OwnerName as OwnerNameComponent } from '../../../components/InputBox';
import { Input } from '../../../components';

import validator from '../../../domain/validator';
import { CardInfo } from '../../../types/card';

const InputBoxStories = () => {
  const [cardInfo, { setCardInfo }] = [useCardInfoValue(), useCardInfoActions()];

  const { onSubmit, onChange, error } = useForm({
    submitAction: () => {},
    changeAction: (name: string, value: string) => {
      setCardInfo((prev: CardInfo) => ({ ...prev, [name]: value }));
    },
    errorOptions: {
      initState: {
        expirationMonth: '',
        expirationYear: '',
      },
      validator,
    },
  });

  return (
    <form onSubmit={onSubmit}>
      <OwnerNameComponent ownerName={cardInfo?.ownerName} maxLength={30} error={error}>
        <Input
          name="ownerName"
          value={cardInfo?.ownerName}
          onChange={onChange}
          maxLength={30}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          type="text"
        />
      </OwnerNameComponent>
      <button style={{ visibility: 'hidden' }}></button>
    </form>
  );
};

export const OwnerName = () => {
  return (
    <CardInfoProvider>
      <InputBoxStories />
    </CardInfoProvider>
  );
};

const meta: Meta<typeof OwnerName> = {
  component: OwnerName,
  title: 'Components/InputBox',
};

export default meta;
