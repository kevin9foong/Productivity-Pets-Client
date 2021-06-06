// Utility functions for access iOS keychain services & Android sharedPreferences
// Abstract SecureStore
import * as SecureStore from "expo-secure-store";

// returns a promise
export const save = (
  key: string,
  value: string,
  secureStoreOptions?: SecureStore.SecureStoreOptions
) => SecureStore.setItemAsync(key, value, secureStoreOptions);

// returns a promise
export const getValueFor = (key: string) => SecureStore.getItemAsync(key);
