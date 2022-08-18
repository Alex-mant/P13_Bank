import {accounts} from '../datas/mainUserAccounts'
import MainUserAcountSection from "../component/MainUserAccountSection/MainUserAccountSection";

export const setAccountSection = () => {
  return accounts.map((account, index) => {
    return <MainUserAcountSection key={index} {...account} />;
  });
};
