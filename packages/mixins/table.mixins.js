let defaultPageSize = 10;
const table = {
  data() {
    return {
      tableOptions: {
        data: [], // 列表数据
        border: true, // 带边框
        style: "width: 100%",
        size: "small",
        multipleSelection: [], // 列表多选
      },
      tableOptionsMethod: {
        "selection-change": this.handleSelectionChange
      },
      paginationOptions: {
        class: "fyDiv",
        background: true, // 带有背景色
        layout: "total, sizes, prev, pager, next",
        pageSizes: [10, 20, 30, 40],
        total: 0, // 应用列表总数量
        pageSize: defaultPageSize, // 当前分页数量
        currentPage: 1, // 当前页数第一页
        hideOnSinglePage: false, // 是否显示分页组件,必须total总数也要小于当前要展示的页数
      },
      paginationOptionsMethod: {
        "size-change": this.handleSizeChange,
        "current-change": this.handleCurrentChange
      }
    };
  },
  methods: {
    // 获取数据回调处理分页和data
    handlePageData(data, total, type = true) {
      this.tableOptions.data = data;
      // 如果还有下一页，则显示分页插件
      if (total > defaultPageSize) {
        this.paginationOptions.hideOnSinglePage = false;
      } else if (type === true) {
        // 当小于一页的时候，传false还要展示分页组件
        this.paginationOptions.hideOnSinglePage = true;
        this.paginationOptions.currentPage = 1;
        this.paginationOptions.pageSize = defaultPageSize;
      }
      this.paginationOptions.total = total;
    },
    // 选项变化
    handleSelectionChange(multipleSelection) {
      this.tableOptions.multipleSelection = multipleSelection;
    },
    // 改变页数
    handleCurrentChange(currentPage) {
      this.paginationOptions.currentPage = currentPage;
      this.queryList ? this.queryList() : this.$parent.queryList();
    },
    // 选择页数
    handleSizeChange(currentSize) {
      this.paginationOptions.pageSize = currentSize;
      this.paginationOptions.currentPage = 1;
      this.queryList ? this.queryList() : this.$parent.queryList();
    },
    // 搜索专用
    handleSearchChange(currentPage = 1, pageSize = defaultPageSize) {
      this.paginationOptions.pageSize = pageSize;
      this.paginationOptions.currentPage = currentPage;
      this.queryList ? this.queryList() : this.$parent.queryList();
    }
  }
};

export default table;