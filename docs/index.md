<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData();
console.log("hello");
</script>
  <div class="p-4 bg-blue-500 text-white">
	{{$t('greeting')}} ok
  </div>



