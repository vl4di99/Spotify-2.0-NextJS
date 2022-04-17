import React from "react";
import { getProviders, signIn } from "next-auth/react";
import spotify from "../images/spotify.png";
import spotifyfull from "../images/spotifyfull.png";

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      Here comes an image
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <img
            className="w-52 mb-10 justify-center"
            src="https://pngset.com/images-original/spotify-logo-black-background-symbol-trademark-text-word-transparent-png-1355999.png"
          />
          <button
            className="bg-[#18D860] text-white p-5 rounded-full"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
