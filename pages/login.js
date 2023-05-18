import { getProviders, signIn } from "next-auth/react";
const Login = ({ providers }) => {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      <img className="h-20 mb-5" src="./images/sp-logo.png" alt="" />
      {Object.values(providers).map((provider, key) => (
        <div key={key}>
          <button
            className="bg-[#18D860] text-white p-4 rounded-full"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
