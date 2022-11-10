import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Hero Chef`;
  }, [title]);
};

export default useTitle;
