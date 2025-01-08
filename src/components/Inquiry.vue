<template>
  <main class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div class="mx-auto col-xl-4 inquiry">
      <h1 class="text-center fw-900">1:1 문의</h1>
      <div>
        <!-- Inquiry Type Dropdown -->
        <div
          class="inputBox"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <label>문의유형</label>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              :style="{ color: selectedOption ? 'black' : 'gray !important' }"
            >
              {{ selectedOption || "문의 유형을 선택해 주세요." }}
            </button>
            <ul class="dropdown-menu">
              <li v-for="item in options" :key="item.id">
                <a class="dropdown-item" href="#" @click.prevent="selectOption(item)">
                  {{ item.label }}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- Name Input -->
        <div
          class="inputBox"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <label>성명</label>
          <input
            type="text"
            name="name"
            v-model="inquiry.name"
            placeholder="기존 이름 or 비회원시 성명을 입력해 주세요."
          />
        </div>
        <!-- Email Input -->
        <div
          class="inputBox"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <label>이메일</label>
          <input
            type="email"
            name="email"
            v-model="inquiry.email"
            placeholder="기존 이메일 or 비회원시 이메일을 입력해 주세요."
          />
        </div>
        <!-- Title Input -->
        <div
          class="inputBox"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1500"
        >
          <label>제목</label>
          <input
            type="text"
            name="title"
            v-model="inquiry.title"
            placeholder="제목을 입력해 주세요."
          />
        </div>
        <!-- Inquiry Text -->
        <div
          class="inputBox"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="2000"
        >
          <label>문의내용</label>
          <textarea
            v-model="inquiry.text"
            placeholder="문의 내용을 입력해주세요."
          ></textarea>
        </div>
        <!-- File Attachment -->
        <div
          class="inputBox"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="2000"
        >
          <label>사진첨부</label>
          <div>
            <div class="fake">
              <input
                type="file"
                name="file"
                accept="image/*"
                @change="handleFileUpload"
                multiple
              />
              <i class="fa-light fa-plus"></i>
            </div>
            <div
              class="fileBucket mt-4"
              v-if="imagePreviews.length > 0"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <p class="fw-700">첨부 이미지</p>
              <div
                class="imgWrap d-flex align-items-center justify-content-start gap-1 mt-4"
              >
                <div
                  class="imgBox"
                  v-for="(imgSrc, index) in imagePreviews"
                  :key="index"
                  @mouseover="hoveredImage = index"
                  @mouseleave="hoveredImage = null"
                >
                  <img :src="imgSrc" alt="Uploaded image" />
                  <button v-if="hoveredImage === index" @click="removeImage(index)">
                    <i class="fa-solid fa-trash-can-xmark"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Buttons -->
        <div
          class="btnWrap"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="2000"
        >
          <button
            type="button"
            class="btn-secondary fw-700"
            data-bs-toggle="modal"
            data-bs-target="#nono"
          >
            취소
          </button>
          <button
            type="button"
            class="btn-primary fw-700"
            data-bs-toggle="modal"
            data-bs-target="#okok"
          >
            등록
          </button>
        </div>
      </div>
    </div>
    <SSwiper />
  </main>

  <!-- Modal 등록 -->
  <div
    class="modal noHeader fade"
    id="okok"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="okokLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header"></div>
        <div class="modal-body">
          <h3>문의 등록하기</h3>
          <p>문의를 등록하시겠습니까?</p>
        </div>
        <div class="modal-footer double btnWrap">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            취소
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="submitForm"
          >
            등록
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal 취소 -->
  <div
    class="modal noHeader fade"
    id="nono"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="nonoLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header"></div>
        <div class="modal-body">
          <h3>문의 취소</h3>
          <p>이전 페이지로 돌아가시겠습니까?</p>
        </div>
        <div class="modal-footer double btnWrap">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            아니오
          </button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
            <router-link to="/csc"> 예</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SSwiper from "@/components/SmallBanner";
export default {
  name: "Inquiry",
  components: {
    SSwiper,
  },
  data() {
    return {
      inquiry: {
        type: "",
        name: "",
        email: "",
        title: "",
        text: "",
        file: null,
      },
      options: [
        {
          label: "문의유형 1",
          id: 0,
        },
        {
          label: "문의유형 2",
          id: 1,
        },
        {
          label: "문의유형 3",
          id: 2,
        },
        {
          label: "문의유형 4",
          id: 3,
        },
      ],
      selectedOption: null,
      imagePreviews: [],
      hoveredImage: null, // Tracks the index of the hovered image
    };
  },
  computed: {},
  methods: {
    selectOption(item) {
      this.selectedOption = item.label; // Set the selected option's label
      this.inquiry.type = item.id; // Save the selected ID
    },
    handleFileUpload(event) {
      const files = Array.from(event.target.files); // Convert the FileList to an array
      this.inquiry.file = files; // Store the file objects

      // Clear existing previews
      this.imagePreviews = [];

      // Generate preview URLs
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreviews.push(e.target.result); // Push the image data URL to the array
        };
        reader.readAsDataURL(file);
      });
    },
    submitForm() {
      // Form submission logic here
      console.log("Form submitted with data:", this.inquiry);
    },
    removeImage(index) {
      this.imagePreviews.splice(index, 1); // Remove the image at the given index
    },
  },
};
</script>
