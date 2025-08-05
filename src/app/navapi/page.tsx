"use client";
import { Database, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export function formatBytes(bytes: number, decimals = 2) {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

const NavApi = () => {
  const [quota, setQuota] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const getStorage = async () => {
      if (navigator.storage && navigator.storage.estimate) {
        const { quota } = await navigator.storage.estimate();
        setQuota(quota || 0);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    getStorage();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      {loading ? (
        <Loader2 className="animate-spin" />
      ) : (
        <div className="flex items-center justify-center gap-2 bg-slate-800 p-6 rounded-md">
          <Database />
          <span>Storage available: {formatBytes(quota)}</span>
        </div>
      )}
    </div>
  );
};
export default NavApi;
