import { useState, useEffect } from "react";
import configAxios from "@/api/config/config-axios";

export function useBlogData(slug) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchBlogData = async () => {
      try {
        const res = await configAxios.get(
          `blogs?filters[slug][$eq]=${slug}&populate=*`
        );
        console.log(res.data.data);
        
        const fetchedBlog = res.data.data[0];
        if (!fetchedBlog) throw new Error("Blog not found");
        setData(fetchedBlog);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [slug]);

  return { data, loading, error };
}
