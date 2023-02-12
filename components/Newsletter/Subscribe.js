import { useState } from "react";
import ErrorMsg from "./ErrorMsg";
import Loading from "./Loading";
import SuccessMsg from "./SuccessMsg";

const Subscribe = () => {
  const [newsletter, setNewsletter] = useState({
    email: "",
    state: "",
    msg: "",
  });

  const subscribe = async (e) => {
    e.preventDefault();

    setNewsletter({
      ...newsletter,
      state: `loading`,
    });

    const response = await fetch("/api/newsletter", {
      body: JSON.stringify({
        email: newsletter.email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await response.json();

    if (error) {
      setNewsletter({
        ...newsletter,
        msg: error,
        state: `error`,
      });
      return;
    }

    setNewsletter({
      email: "",
      state: `success`,
      msg: `Success! Thanks for subscribing.`,
    });
  };

  const handleChange = (e) => {
    setNewsletter({
      ...newsletter,
      email: e.target.value,
    });
  };

  return (
    <form className="grid grid-cols-1 gap-y-3" onSubmit={subscribe}>
      <div className={`grid grid-cols-1 gap-y-2 w-72 max-w-full mx-auto`}>
        <input
          className="h-[45px] rounded-lg border border-solid px-4 py-2 border-[#999] outline-none focus:border-black"
          aria-label="Subscibe email"
          placeholder="Your email"
          value={newsletter.email}
          autoComplete="email"
          onChange={handleChange}
          type="email"
          required
        />
        <button
          className="h-[45px] rounded-lg flex items-center justify-center bg-black border-black text-white"
          type="submit"
        >
          {newsletter.state === "loading" ? <Loading /> : "Try It"}
        </button>
      </div>
      <div className="w-72 max-w-full mx-auto text-[12px]">
        {newsletter.state === "error" ? (
          <ErrorMsg>{newsletter.msg}</ErrorMsg>
        ) : newsletter.state === "success" ? (
          <SuccessMsg>{newsletter.msg}</SuccessMsg>
        ) : (
          ""
        )}
      </div>
    </form>
  );
};

export default Subscribe;
