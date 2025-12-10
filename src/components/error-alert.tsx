"use client";

import { AlertTriangle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface ErrorAlertProps {
  message?: string;
}

export const ErrorAlert = ({ message }: ErrorAlertProps) => {
  return (
    <Alert
      variant="destructive"
      className="border-rose-700 bg-rose-950/70 text-rose-50"
    >
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription className="text-xs">
        {message ??
          "Something went wrong while fetching data. Please try again."}
      </AlertDescription>
    </Alert>
  );
};
