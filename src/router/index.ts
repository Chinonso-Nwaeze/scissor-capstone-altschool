import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Analytics from "@/views/AnalyticsPage.vue";
import MyUrls from "@/views/MyUrls.vue";
import FAQs from "@/views/FAQs.vue";
import Feather from "@/views/Feather.vue";
import Login from "@/views/Login.vue";
import Prcing from "@/views/Pricing.vue";
import Tryforfree from "@/views/Try-for-free.vue";
import Frame from "@/views/Frame.vue";
// Import other views as needed

const routes: Array<RouteRecordRaw> = [
  {
    path: "/analytics",
    name: "Analytics",
    component: Analytics,
  },
  {
    path: "/my-urls",
    name: "MyUrls",
    component: MyUrls,
  },
  // Define other routes
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
