<template>
  <div id="index">
    <dv-full-screen-container class="bg">
      <div class="host-body">
        <div class="header">
          <screen-header></screen-header>
        </div>
        <div class="content">
          <el-row style="height: 100%">
            <el-col style="height: 100%">
              <el-row style="height: 100%">
                <el-col
                  style="height: 100%; display: flex; flex-direction: row"
                >
                  <div
                    style="
                      height: 100%;
                      flex: 2;
                      flex-direction: column;
                      background: rgba(0, 0, 0, 0.5);
                      align-items: stretch;
                    "
                  >
                    <dv-border-box-8 style="height: 20%">
                      <inven-status></inven-status>
                    </dv-border-box-8>
                    <dv-border-box-12 style="height: 35%; margin-top: 2.5%">
                      <city-info></city-info>
                    </dv-border-box-12>
                    <dv-border-box-1 style="height: 40%; margin-top: 2.5%">
                      <alarm-info></alarm-info>
                    </dv-border-box-1>
                  </div>
                  <div
                    style="
                      height: 100%;
                      flex: 6;
                      flex-direction: column;
                      align-items: stretch;
                    "
                  >
                    <div class="ButtonArea">
                      <div class="Button" @click="AddPOIs">加点</div>
                      <div class="Button" @click="RemovePOIs">减点</div>
                    </div>
                  </div>
                  <div
                    style="
                      height: 100%;
                      flex: 2;
                      flex-direction: column;
                      align-items: stretch;
                      background: rgba(0, 0, 0, 0.5);
                    "
                  >
                    <dv-border-box-13 style="height: 35%">
                      <storage-top></storage-top>
                    </dv-border-box-13>
                    <dv-border-box-12 style="height: 35%; margin-top: 2.5%">
                      <city-num></city-num>
                    </dv-border-box-12>
                    <dv-border-box-8 style="height: 25%; margin-top: 2.5%">
                      <city-info></city-info>
                    </dv-border-box-8>
                  </div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>
<script>
import ScreenHeader from "./screen/screenHeader.vue";
import InvenStatus from "./screen/subInven.vue";
import StorageTop from "./screen/storageTop.vue";
import AlarmInfo from "./screen/alarmInfo.vue";
import TopologyInfo from "./screen/topologyInfo.vue";
import CityInfo from "./screen/cityInfo.vue";
import CityNum from "./screen/cityNum.vue";
import poi_request from './pois';

export default {
  components: {
    CityInfo,
    CityNum,
    InvenStatus,
    StorageTop,
    AlarmInfo,
    TopologyInfo,
    ScreenHeader,
  },
  data() {
    return {};
  },
  mounted() {
    __cy.SetupListener("Demo", (event) => {
      console.log("event :", event);
    });
    __cy.Connect("http://xxxxxxx:pppp");
  },
  methods: {
    AddPOIs() {
      __cy.SendRequest("UpdatePOIs", poi_request, (result) => {
        console.log("Request Result : ", result);
      });
    },
    RemovePOIs() {
      __cy.SendRequest("DeleteAllPOIs", {}, (result) => {
        console.log("Request Result : ", result);
      });
    },
  },
};
</script>

<style lang="scss" scope>
/* @import "../assets/scss/index.scss"; */

.bg {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  pointer-events: none;
}

.host-body {
  flex: 1;
  flex-direction: column;
  justify-content: space-around;

  .header {
    width: 100%;
    height: 80px;
    flex: 2;
  }

  .content {
    flex: 2;
    width: 100%;
    height: calc(100% - 80px);
  }
}

.systime {
  color: #5cd9e8;
  font-size: 16px !important;
  font-weight: 800;
  margin-left: 10px;
}

.ButtonArea {
  display: flex;
  position: absolute;
  bottom: 0;
  pointer-events: fill;
}

.Button {
  padding: 10px 30px;
  background: #5757b7;
  color: white;
  font-size: 16px;
  margin-right: 12px;
}
</style>
