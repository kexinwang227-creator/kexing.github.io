import { createClient } from "@supabase/supabase-js";

// The publishable key is intended for browser use; Supabase policies control data access.
export const supabase = createClient(
  "https://yfcalwmpdaiwbvamjmqd.supabase.co",
  "sb_publishable_oO6eN2Op2AdW42RocENioQ_7n1Us_J8",
);

