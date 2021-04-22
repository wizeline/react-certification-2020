import { useRouter } from "next/router";
import { useData } from "../state/DataProvider";

const withAuth = Component => {
    const Auth = () => {
      // Login data added to props via redux-store (or use react context for example)
      const {data} = useData()
  
      // If user is not logged in, return login component
      if (!data.user) {
        return (
          <h1>Error 404</h1>
        );
      }
  
      // If user is logged in, return original component
      return (
        <Component/>
      );
    };
  
    // Copy getInitial props so it will run as well
    if (Component.getInitialProps) {
      Auth.getInitialProps = Component.getInitialProps;
    }
  
    return Auth;
  };
  
  export default withAuth;